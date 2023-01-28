import React, { useEffect, useState } from "react";
import { FindUserInPlaylist, FormatPlaylistURI as FormatPlaylistURIFromContext, GetPlaylistData, GetUserInfo } from "./lib";

export default function Widget() {
  const [culprit, setCulprit] = useState(""); // The user that added the song
  const [playlistSrc, setPlaylistSrc] = useState(""); // The user that added the song
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("");

  const clear = () => {
    setCulprit("");
    setAvatarSrc("");
    setPlaylistSrc("");
    setPlaylistTitle("");
  }

  useEffect(() => {
    const populate = async (data: Spicetify.PlayerState) => {
      if (!data) return;
      
      const contextUri = data.context_uri;
      if (!contextUri) return;

      const playlistData = await GetPlaylistData(contextUri);
      if (!playlistData) return;

      const _playlistTitle = playlistData.name;
      const _playlistSrc = FormatPlaylistURIFromContext(contextUri);

      if (playlistTitle !== _playlistTitle) setPlaylistTitle(_playlistTitle);
      if (playlistSrc !== _playlistSrc) setPlaylistSrc(_playlistSrc);

      if (!data.track) return;
      const trackUri = data.track.uri;
      const userId = await FindUserInPlaylist(trackUri, contextUri, true);
      if (!userId) return;

      const userInfo = await GetUserInfo(userId);
      if (!userInfo) return;

      const _culprit = userInfo.display_name;

      if (culprit !== _culprit) setCulprit(_culprit);

      if (userInfo.images.length > 0) {
        const _avatarSrc = userInfo.images[0].url;
        if (avatarSrc !== _avatarSrc) setAvatarSrc(_avatarSrc);
      }
    }

    Spicetify.Player.addEventListener("songchange", async (event) => {
      clear();
      if (event) await populate(event.data);
    });

    populate(Spicetify.Player.data);

    return () => {
      Spicetify.Player.removeEventListener("songchange", () => {});
    }
  });

  return (
    <div className="WhoAddedWidgetContainer">
      {playlistSrc.length > 0 ?
        <h5 className="DullText">From <a className="EmphasisText" href={playlistSrc}>{playlistTitle}</a></h5>
      : null}
      {culprit.length > 0 ? 
      <div className="WhoAddedCulpritContainer">
        <h5 className="DullText">Added by </h5>
        <img className="Avatar" src={avatarSrc} width={24} height={24} />
        <h5 className="EmphasisText">{culprit}</h5>
      </div> : null}
    </div>
  )
}