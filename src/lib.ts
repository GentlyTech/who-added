/**
 * TODO Maybe add some better error checking
 */

/**
 * Returns the JSON metadata of a given playlist ID.
 * 
 * Endpoint: https://api.spotify.com/v1/playlists/{playlist_id}
 * @param id the playlist to retrieve metadata for
 * @returns the PlaylistData object, or undefined if there was an error
 */
export async function GetPlaylistData(id: string): Promise<PlaylistData | undefined> {
  if (id.length < 1) return undefined;

  let playlistID: string;
  const URIArray = id.split(":");
  if (URIArray.length > 1) {
    playlistID = URIArray[URIArray.length - 1];
  }
  else {
    playlistID = id;
  }

  try {
    return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${playlistID}`));
  }
  catch {
    return undefined;
  }
}

/**
 * Takes a context URI and converts it into a pathname.
 * 
 * @param rawUri the URI to convert into a pathname
 * @returns a string containing the converted URI, or a blank string if there was a failure
 */

export function FormatPlaylistURI(rawUri: string): string {
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
 * Returns the JSON metadata of a given user ID.
 * 
 * Endpoint: https://api.spotify.com/v1/users/{user_id}
 * @param id the user to retrieve info for
 * @returns the UserInfo object, or undefined if there was an error
 */
export async function GetUserInfo(id: string): Promise<UserInfo | undefined> {
  if (id.length < 1) return undefined;

  try {
    return (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/users/${id}`));
  }
  catch {
    return undefined;
  }
}

/**
 * Tries to find who added a given song in a playlist.
 * 
 * I'm sorry for the unlucky soul who reads this code (and Spotify for the API spam).
 * 
 * @param trackUri the URI of the song to search for
 * @param playlistData the PlaylistData that you want to search in
 * @param queryNext whether to try searching the next batch of songs (Spotify imposes only querying 100 songs at a time)
 * @returns the user ID of the person who added the song, or undefined if it was unable to find one
 */

export async function FindUserInPlaylist(trackUri: string, originalPlaylistData: PlaylistData, queryNext?: boolean): Promise<string | undefined> {
  let playlistData = originalPlaylistData;
  let matchIndex = -1;

  while (matchIndex < 0) {
    if (!playlistData || !playlistData.tracks || !playlistData.tracks.items || playlistData.tracks.items.length < 1) return undefined;
    matchIndex = playlistData.tracks.items.findIndex(item => item.track.uri === trackUri);
    if (playlistData.tracks.next.length < 1 || !queryNext) return undefined;
    playlistData = await Spicetify.CosmosAsync.get(playlistData.tracks.next);
  }

  return playlistData.tracks.items[matchIndex].added_by.id;
}
