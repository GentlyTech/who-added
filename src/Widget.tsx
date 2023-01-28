import React, { useEffect, useState } from "react";
import { GenerateWidgetData, WidgetDataIncomplete } from "./lib";

export default function Widget() {
  const [widgetData, updateWidgetData] = useState(undefined as unknown as WidgetData);

  useEffect(() => {
    let canUpdate = true;

    Spicetify.Player.addEventListener("songchange", async (event) => {
      if (event) {
        GenerateWidgetData(event.data).then((newWidgetData) => {
          if (canUpdate) updateWidgetData(newWidgetData);
        })
        
      }
    });

    return () => {
      Spicetify.Player.removeEventListener("songchange", () => {});
      canUpdate = false;
    }
  });

  if (WidgetDataIncomplete(widgetData)) return null;

  return (
    <div className="WhoAddedWidgetContainer">
      <h5 className="DullText">From <a className="EmphasisText" href={widgetData.playlistData.playlistSrc}>{widgetData.playlistData.playlistTitle}</a></h5>
      <div className="WhoAddedCulpritContainer">
        <h5 className="DullText">Added by</h5>
        <img className="Avatar" src={widgetData.userInfo.avatarSrc} width={24} height={24} />
        <h5 className="EmphasisText">{widgetData.userInfo.culprit}</h5>
      </div>
    </div>
  )
}