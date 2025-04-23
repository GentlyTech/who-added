import type {
  PlatformPlaylistContents,
  PlatformPlaylistMetadata,
  PlatformTrack,
  RESTUserInfo,
} from "../types/extension/API";
import type { WidgetData } from "../types/extension/WidgetData";

import { EXTENSION_NAME } from "./Globals";
import { LikedSongsIcon } from "../../assets/LikedSongsIcon";

/**
 * Generates a WidgetData struct given PlayerState data.
 *
 * @param data the PlayerState data that will be used to populate the WidgetData
 * @returns a new WidgetData struct
 */
export async function GenerateWidgetData(
  data?: Spicetify.PlayerState
): Promise<WidgetData> {
  const widgetData: WidgetData = {
    userInfo: {
      culprit: "",
      culpritProfileSrc: "",
      avatarSrc: "",
    },
    playlistData: {
      playlistTitle: "",
      playlistSrc: "",
      playlistArtSrc: ""
    },
  };

  if (data != null) {
    const contextUri = data.context.uri;

    console.log(`[${EXTENSION_NAME}] Context URI: ${contextUri}`);

    // TODO maybe consider extracting some of these lines into separate functions

    if (contextUri != null) {
      if (isLikedSongsPlaylist(contextUri)) { // Short circuit if playlist is the user's liked songs playlist
        widgetData.playlistData.playlistTitle = "Liked Songs"; // TODO localize this
        widgetData.playlistData.playlistSrc = UriToPathname(contextUri);
        widgetData.playlistData.playlistArtSrc = LikedSongsIcon;
        return widgetData;
      }

      if (isFolder(contextUri)) { // Short circuit if playlist is a folder
        // TODO actually populate with respective folder's data
        return widgetData;
      }

      const playlistMetadata = await GetPlaylistMetadata(contextUri);
      const playlistContents = await GetSongsFromPlaylist(contextUri);

      if (playlistMetadata != null) {
        const playlistTitle = playlistMetadata.name;
        const playlistSrc = UriToPathname(contextUri);
        const playlistAlbumArtSrc = playlistMetadata.images.length > 0 ? playlistMetadata.images[0].url : "";

        widgetData.playlistData.playlistTitle = playlistTitle;
        widgetData.playlistData.playlistSrc = playlistSrc;
        widgetData.playlistData.playlistArtSrc = playlistAlbumArtSrc;

        if (data.item != null && playlistContents != null) {
          const trackUri = data.item.uri;
          const userId = await GetCulprit(trackUri, playlistContents.items);

          if (userId != null) {
            const userInfo = await GetUserInfo(userId);

            if (userInfo != null) {
              const culpritName = userInfo.display_name;
              const culpritProfileSrc = UriToPathname(userInfo.uri);

              widgetData.userInfo.culprit = culpritName;
              widgetData.userInfo.culpritProfileSrc = culpritProfileSrc;

              if (userInfo.images.length > 0) {
                const avatarSrc = userInfo.images[0].url;
                widgetData.userInfo.avatarSrc = avatarSrc;
              }
            }
          }
        }
      }
    }
    else {
      console.error("context data was null");
    }
  }

  return widgetData;
}

/**
 * Takes a context URI and converts it into a pathname.
 *
 * @param rawUri the URI to convert into a pathname
 * @returns a string containing the converted URI, or a blank string if there was a failure
 */

export function UriToPathname(rawUri: string): string {
  const uriArray = rawUri.split(":");

  if (uriArray.length < 2) return rawUri;

  const filteredUriArray = uriArray.slice(1);
  let finalUri = "/";

  for (let i = 0; i < filteredUriArray.length; i++) {
    const uri = filteredUriArray[i];
    finalUri += `${uri}/`;
  }

  return finalUri;
}

/**
 * Checks whether the given context URI is the user's "Liked Songs" playlist.
 * 
 * This is needed because the user's liked songs is a built-in playlist, which has its own special URI.
 * 
 */
export function isLikedSongsPlaylist(contextUri: string) {
  return contextUri.endsWith("collection"); // FIXME maybe come up with a better solution (although this does suffice)
}

/**
 * Checks whether the given context URI is a folder.
 * 
 * This is needed because folders use a different URI format.
 * 
 */
export function isFolder(contextUri: string) {
  return contextUri.match("folder"); // FIXME maybe come up with a better solution (although this does suffice)
}

/**
 * Gets a playlist's metadata using its ID.
 *
 * @param id the playlist's ID (can be URI as well)
 * @returns a PlatformPlaylistMetadata object containing the playlist's metadata, or undefined if there was a failure
 */
export async function GetPlaylistMetadata(
  id: string
): Promise<PlatformPlaylistMetadata | undefined> {
  const fullUri = Spicetify.URI.isPlaylistV2(id)
    ? Spicetify.URI.fromString(id)
    : undefined;

  if (fullUri == null) return undefined;

  try {
    return await Spicetify.Platform.PlaylistAPI.getMetadata(fullUri.toURI());
  } catch {
    return undefined;
  }
}

/**
 * Gets a playlist's songs using its ID.
 *
 * @param id the playlist's ID (can be URI as well)
 * @returns a PlatformPlaylistContents object containing the playlist's contents, or undefined if there was a failure
 */
export async function GetSongsFromPlaylist(
  id: string
): Promise<PlatformPlaylistContents | undefined> {
  const fullUri = Spicetify.URI.isPlaylistV2(id)
    ? Spicetify.URI.fromString(id)
    : undefined;

  if (fullUri == null) return undefined;

  try {
    return await Spicetify.Platform.PlaylistAPI.getContents(fullUri.toURI());
  } catch {
    return undefined;
  }
}

/**
 * Returns the JSON metadata of a given user ID.
 *
 * Endpoint: https://api.spotify.com/v1/users/{user_id}
 * @param id the user to retrieve info for
 * @returns the RESTUserInfo object, or undefined if there was an error
 */
export async function GetUserInfo(
  id: string
): Promise<RESTUserInfo | undefined> {
  const fullUri: Spicetify.URI & { username?: string } = Spicetify.URI.isProfile(id)
    ? Spicetify.URI.fromString(id)
    : Spicetify.URI.profileURI(id, []);

  if (!fullUri.username) return undefined;

  try {
    return await Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1/users/${fullUri.username}`
    );
  } catch {
    return undefined;
  }
}

/**
 * Tries to find who added a given song in a playlist.
 *
 * @param trackUri the URI of the song to search for (can be full or just the ID part)
 * @param tracks the list of songs to search in
 * @returns the URI of the user who added the song, or undefined if it was unable to find one
 */

export async function GetCulprit(
  trackUri: string,
  tracks: PlatformTrack[]
): Promise<string | undefined> {
  const fullUri = Spicetify.URI.isTrack(trackUri)
    ? Spicetify.URI.fromString(trackUri)
    : Spicetify.URI.trackURI(trackUri, "00:00", "", false);
  const trackCandidate = tracks.find((track) => track.uri === fullUri.toURI());

  if (trackCandidate) {
    return trackCandidate.addedBy.uri;
  }

  return undefined;
}
