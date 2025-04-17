import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { InfoIcon } from "../assets/InfoIcon";
import Widget from "./Widget";
import manifest from "../package.json";

import "./styles.css";
import "./colors.css";

const BUTTON_INJECTION_TARGET: string = ".main-nowPlayingWidget-nowPlaying"; // The selector type is needed (e.g. period for classname and hashtag for id)
const WIDGET_INJECTION_TARGET: string = ".main-navBar-mainNav"; // The selector type is needed (e.g. period for classname and hashtag for id)
const MAX_TRIES: number = 10;
const EXTENSION_NAME: string = manifest.name;

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const [playerState, setPlayerState] = useState<Spicetify.PlayerState | undefined>(Spicetify.Player.data);
  const toggleButtonRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const injectionTargetRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    Spicetify.Player.addEventListener("songchange", async (event) => {
      setPlayerState(event?.data);
    });

    return () => {
      Spicetify.Player.removeEventListener("songchange", () => {});
    }
  });

  useEffect(() => {
    if (toggleButtonRef.current == null) return;
    Spicetify.Tippy(toggleButtonRef.current, {content: "Who Added This?"})
  });

  useEffect(() => {
    const target: HTMLDivElement | null = document.querySelector(WIDGET_INJECTION_TARGET);
    if (target == null) return;
    injectionTargetRef.current = target;

    return () => {
      injectionTargetRef.current = null;
    }
  });

  function onToggleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    setOpen(!open);
  }

  return (
    <>
      {injectionTargetRef.current != null ? createPortal(<Widget open={open} playerState={playerState} />, injectionTargetRef.current) : null}
      <button ref={toggleButtonRef} className="ToggleButton" onClick={onToggleButtonClick}>{InfoIcon}</button>
    </>
  );
}

async function main() {
  let tries: number = 0;

  while (!Spicetify?.showNotification || !Spicetify.CosmosAsync || !Spicetify.Player || !Spicetify.Platform || !Spicetify.URI) {
    if (tries >= MAX_TRIES) {
      console.error(`[${EXTENSION_NAME}] One (or more) of Spicetify's libraries did not load in the allotted time. Aborting...`);
      return -1;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    tries++;
  }
  
  tries = 0;
  let injectionTargetDOM = document.querySelector(BUTTON_INJECTION_TARGET);

  while (!injectionTargetDOM) {
    if (tries >= MAX_TRIES) {
      console.error(`[${EXTENSION_NAME}] Could not find the target element to inject into within the allotted time. Aborting...`);
      return -1;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    injectionTargetDOM = document.querySelector(BUTTON_INJECTION_TARGET);
    tries++;
  }

  console.log(`[${EXTENSION_NAME}] Extension loaded!`);

  let rootContainer = document.createElement("div");
  rootContainer.className += "WhoAddedButtonContainer";
  injectionTargetDOM.appendChild(rootContainer);

  const root = Spicetify.ReactDOM.createRoot(rootContainer);

  root.render(
    <App />
  );
}

export default main;
