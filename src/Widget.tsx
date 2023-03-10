import React, { useEffect, useState } from "react";
import { GenerateWidgetData } from "./lib";

import type { WidgetData } from "./types/extension/lib";

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

  const navigate = (pathname: string) => {
    Spicetify.Platform.History.push(pathname);
  }

  const playlistComponent = () => {
    if (!widgetData || !widgetData.playlistData || !widgetData.playlistData.playlistTitle || widgetData.playlistData.playlistTitle.length < 1) return null;

    const playlistAnchorLink = () => {
      if (widgetData.playlistData.playlistSrc.length < 1) {
        return (<a className="EmphasisText">{widgetData.playlistData.playlistTitle}</a>);
      }
      return (<a className="EmphasisText Pointer" onClick={() => navigate(widgetData.playlistData.playlistSrc)}>{widgetData.playlistData.playlistTitle}</a>);
    }

    return (
      <div className="WhoAddedPlaylistContainer">
        <h5 className="DullText">From</h5>
        <h5>{playlistAnchorLink()}</h5>
      </div>
    );
  }

  const culpritComponent = () => {
    if (!widgetData || !widgetData.userInfo || !widgetData.userInfo.culprit || widgetData.userInfo.culprit.length < 1) return null;

    const culpritAvatarComponent = () => {
      if (widgetData.userInfo.avatarSrc.length < 1) return null;
      return (<img className="Avatar" src={widgetData.userInfo.avatarSrc} width={24} height={24} />);
    }

    const culpritAnchorContainer = () => {
      const hasSrc = widgetData.userInfo.culpritProfileSrc.length > 0;

      const onClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
        if (!hasSrc) return;
        navigate(widgetData.userInfo.culpritProfileSrc)
      }

      return (
        <h5 className={`WhoAddedCulpritAnchorContainer ${hasSrc ? "Pointer" : ""}`} onClick={onClick}>
          {culpritAvatarComponent()}
          <a className="EmphasisText">{widgetData.userInfo.culprit}</a>
        </h5>
      );
    }

    return (
      <div className="WhoAddedCulpritContainer">
        <h5 className="DullText">Added by</h5>
          {culpritAnchorContainer()}
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