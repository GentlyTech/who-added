import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BUTTON_INJECTION_TARGET, EXTENSION_NAME, MAX_TRIES, PEEK_DETECTION_TARGET, WIDGET_INJECTION_TARGET_FULLSCREEN, WIDGET_INJECTION_TARGET_NORMAL } from "./lib/Globals";
import { InfoIcon } from "../assets/InfoIcon";
import Widget from "./components/Widget/Widget";
import { Settings } from "./lib/Settings";

import "./styles/common.css";
import "./styles/colors.css";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const [peek, setPeek] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [playerState, setPlayerState] = useState<Spicetify.PlayerState | undefined>(Spicetify.Player.data);
  const toggleButtonRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const injectionTargetRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const peekDetectionTargetRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    Spicetify.Player.addEventListener("songchange", async (event) => {
      setPlayerState(event?.data);
    });

    const observer = new MutationObserver((mutationList, observer) => {
      for (const record of mutationList) {
        if (record.type == "attributes" && record.attributeName == "class") {
          const isFullscreen: boolean = document.querySelector(".fullscreen") != null;
          setFullscreen(isFullscreen);
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"], childList: false, subtree: false })

    return () => {
      Spicetify.Player.removeEventListener("songchange", () => {});
      observer.disconnect();
    }
  });

  useEffect(() => {
    if (toggleButtonRef.current == null) return;
    Spicetify.Tippy(toggleButtonRef.current, {content: "Who Added This?"})
  });

  useEffect(() => {
    function onHoverUnhover(event: MouseEvent) {
      setPeek(event.type == "mouseenter");
    }

    const injectionTarget: HTMLDivElement | null = fullscreen ? (document.querySelector(WIDGET_INJECTION_TARGET_FULLSCREEN)?.parentElement as unknown as HTMLDivElement) || null : document.querySelector(WIDGET_INJECTION_TARGET_NORMAL);
    if (injectionTarget != null) {
      injectionTargetRef.current = injectionTarget;
    }
    
    const peekDetectionTarget: HTMLDivElement | null = document.querySelector(PEEK_DETECTION_TARGET);
    if (peekDetectionTarget != null) {
      peekDetectionTargetRef.current = peekDetectionTarget;
      peekDetectionTargetRef.current.addEventListener("mouseenter", onHoverUnhover);
      peekDetectionTargetRef.current.addEventListener("mouseleave", onHoverUnhover);
    }

    return () => {
      injectionTargetRef.current = null;

      if (peekDetectionTargetRef.current != null) {
        peekDetectionTargetRef.current.removeEventListener("mouseenter", onHoverUnhover);
        peekDetectionTargetRef.current.removeEventListener("mouseleave", onHoverUnhover);
      }
      peekDetectionTargetRef.current = null;
    }
  }, [fullscreen]);

  function onToggleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    setOpen(!open);
  }

  return (
    <>
      {injectionTargetRef.current != null ? createPortal(<Widget open={open} fullscreen={fullscreen} peek={peek} playerState={playerState} />, injectionTargetRef.current) : null}
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
