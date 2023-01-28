import React from "react"
import ReactDOM from "react-dom";
import Widget from "./widget";
import manifest from "../package.json";
import "./styles.css";

async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  let barElement = document.querySelector(".main-nowPlayingWidget-nowPlaying");

  while (!barElement) {
    await new Promise(resolve => setTimeout(resolve, 100));
    barElement = document.querySelector(".main-nowPlayingWidget-nowPlaying");
  }

  console.log(`Extension ${manifest.name} loaded!`);
  Spicetify.showNotification(`Extension ${manifest.name} loaded!`);

  const root = document.createElement("div");
  root.className += "WhoAddedWidgetContainer";
  barElement.appendChild(root);

  ReactDOM.render(
    <Widget />,
    root
  );
}

export default main;
