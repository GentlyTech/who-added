import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom";

import Widget from "./Widget";
import manifest from "../package.json";
import "./styles.css";

function App() {
  const [playerState, setPlayerState] = useState(Spicetify.Player.data);

  useEffect(() => {
    Spicetify.Player.addEventListener("songchange", async (event) => {
      if (event) setPlayerState(event.data);
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
  while (!Spicetify?.showNotification || !Spicetify.CosmosAsync || !Spicetify.Player || !Spicetify.Platform) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  let barElement = document.querySelector(".main-nowPlayingBar-left");

  while (!barElement) {
    await new Promise(resolve => setTimeout(resolve, 100));
    barElement = document.querySelector(".main-nowPlayingBar-left");
  }

  console.log(`Extension ${manifest.name} loaded!`);
  //Spicetify.showNotification(`Extension ${manifest.name} loaded!`);

  let root = document.createElement("div");
  root.className += "WhoAddedWidgetContainer";
  barElement.appendChild(root);

  ReactDOM.render(
    <App />,
    root
  );
}

export default main;
