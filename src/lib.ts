import type {
  PlatformPlaylistContents,
  PlatformPlaylistMetadata,
  PlatformTrack,
  RESTUserInfo,
} from "./types/extension/API";
import type { WidgetData } from "./types/extension/lib";

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
    },
  };

  if (data != null) {
    const contextUri = data.context_uri;

    if (contextUri != null) {
      const playlistMetadata = await GetPlaylistMetadata(contextUri);
      const playlistContents = await GetSongsFromPlaylist(contextUri);

      if (playlistMetadata != null) {
        const playlistTitle = playlistMetadata.name;
        const playlistSrc = UriToPathname(contextUri);

        widgetData.playlistData.playlistTitle = playlistTitle;
        widgetData.playlistData.playlistSrc = playlistSrc;

        if (data.track != null && playlistContents != null) {
          const trackUri = data.track.uri;
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

export function NewPlaylistV2URI(id: string) {
  try {
    return Spicetify.URI.fromString(`spotify:playlist:${id}`);
  }
  catch {
    return undefined;
  }
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
    : NewPlaylistV2URI(id);

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
    : NewPlaylistV2URI(id);

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
