import React, { useEffect, useState } from "react"

export default function Widget() {
  const [culprit, setCulprit] = useState(""); // The user that added the song
  const [playlistSrc, setPlaylistSrc] = useState(""); // The user that added the song
  const [avatarSrc, setAvatarSrc] = useState("");

  useEffect(() => {
    Spicetify.Player.addEventListener("songchange", (event) => {
      if (!event || !event.data || !event.data.track || !event.data.track.metadata) return;
      const title = event.data.track.metadata["title"];
      const contextURL = event.data.context_url;
      if (playlistSrc !== contextURL) setPlaylistSrc(contextURL);

      Spicetify.showNotification(`Now Playing ${title}`);
    });

    return () => {
      Spicetify.Player.removeEventListener("songchange", () => {});
    }
  });

  return (
    <div className="WhoAddedWidgetContainer">
      {culprit.length > 0 ? 
      <div className="WhoAddedCulpritContainer">
        <img src={avatarSrc} />
        <h5>Added by {culprit}</h5>
      </div> : null}
      {playlistSrc.length > 0 ?
        <h5>From {playlistSrc}</h5>
      : null}
    </div>
  )
}