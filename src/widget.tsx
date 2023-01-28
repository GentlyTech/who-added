import React, { useEffect } from "react"

export default function Widget() {
  useEffect(() => {
    Spicetify.Player.addEventListener("songchange", (event) => {
      if (!event || !event.data || !event.data.track || !event.data.track.metadata) {
        Spicetify.showNotification("Song changed but unable to get song metadata");
        return;
      }

      Spicetify.showNotification(`Now Playing ${event.data.track.metadata["title"]}`)
    });

    return () => {
      Spicetify.Player.removeEventListener("songchange", () => {});
    }
  });

  return (
    <div className="WhoAddedWidgetContainer">
      <h5>Hello world!</h5>
    </div>
  )
}