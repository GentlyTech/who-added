import React, { useEffect, useState } from "react";

import Widget from "./Widget";
import manifest from "../package.json";
import "./styles.css";

const INJECTION_TARGET: string = ".main-nowPlayingWidget-nowPlaying"; // The selector type is needed (e.g. period for classname and hashtag for id)
const MAX_TRIES: number = 10;
const EXTENSION_NAME: string = manifest.name;

function App() {
  const [playerState, setPlayerState] = useState<Spicetify.PlayerState | undefined>(Spicetify.Player.data);

  useEffect(() => {
    Spicetify.Player.addEventListener("songchange", async (event) => {
      setPlayerState(event?.data);
    });

    return () => {
      Spicetify.Player.removeEventListener("songchange", () => {});
    }
  });

  return (
    <>
      <Widget playerState={playerState} />
    </>
  )
}

async function main() {
  let tries: number = 0;

  while (!Spicetify?.showNotification || !Spicetify.CosmosAsync || !Spicetify.Player || !Spicetify.Platform || !Spicetify.URI) {
    if (tries >= MAX_TRIES) {
      console.error(`[${EXTENSION_NAME}] One (or more) of Spicetify's libraries did not load in a reasonable amount of time. Aborting...`);
      return -1;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    tries++;
  }
  
  tries = 0;
  let injectionTargetDOM = document.querySelector(INJECTION_TARGET);

  while (!injectionTargetDOM) {
    if (tries >= MAX_TRIES) {
      console.error(`[${EXTENSION_NAME}] Could not find the target element to inject into in a reasonable amount of time. Aborting...`);
      return -1;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    injectionTargetDOM = document.querySelector(INJECTION_TARGET);
    tries++;
  }

  console.log(`[${EXTENSION_NAME}] Extension loaded!`);

  let rootContainer = document.createElement("div");
  rootContainer.className += "WhoAddedRootContainer";
  injectionTargetDOM.appendChild(rootContainer);

  const root = Spicetify.ReactDOM.createRoot(rootContainer);

  root.render(
    <App />
  );
}

export default main;
