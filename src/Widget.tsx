import React, { useEffect, useState } from "react";
import { GenerateWidgetData } from "./lib";

interface WidgetProps {
  playerState?: Spicetify.PlayerState
}

export default function Widget({ playerState }: WidgetProps) {
  const [widgetData, updateWidgetData] = useState(undefined as unknown as WidgetData);

  useEffect(() => {
    let canUpdate = true;

    GenerateWidgetData(playerState).then((newWidgetData) => {
      if (canUpdate) updateWidgetData(newWidgetData);
    });

    return () => {
      canUpdate = false;
    }
  }, [playerState]);

  const playlistComponent = () => {
    if (!widgetData || !widgetData.playlistData || !widgetData.playlistData.playlistTitle || widgetData.playlistData.playlistTitle.length < 1) return null;

    const playlistAnchorLink = () => {
      if (widgetData.playlistData.playlistSrc.length < 1) {
        return (<a className="EmphasisText">{widgetData.playlistData.playlistTitle}</a>);
      }
      return (<a className="EmphasisText" href={widgetData.playlistData.playlistSrc}>{widgetData.playlistData.playlistTitle}</a>);
    }

    return (
      <h5 className="DullText">From {playlistAnchorLink()}</h5>
    );
  }

  const culpritComponent = () => {
    if (!widgetData || !widgetData.userInfo || !widgetData.userInfo.culprit || widgetData.userInfo.culprit.length < 1) return null;

    const culpritAvatarComponent = () => {
      if (widgetData.userInfo.avatarSrc.length < 1) return null;
      return (<img className="Avatar" src={widgetData.userInfo.avatarSrc} width={24} height={24} />);
    }

    return (
      <div className="WhoAddedCulpritContainer">
        <h5 className="DullText">Added by</h5>
        {culpritAvatarComponent()}
        <h5 className="EmphasisText">{widgetData.userInfo.culprit}</h5>
      </div>
    );
  }

  return (
    <div className="WhoAddedWidgetContainer">
      {playlistComponent()}
      {culpritComponent()}
    </div>
  )
}