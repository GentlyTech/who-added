import React from "react"
import ReactDOM from "react-dom";
import Widget from "./widget";
import manifest from "../package.json";
import "./styles.css";

function init(event: Event) {
  let barElement = document.querySelector(".main-nowPlayingBar-left");

  if (!barElement) {
    console.error(`Unable to load extension ${manifest.name} because the bar element could not be found.`);
    Spicetify.showNotification("Unable to get parent container because the bar element could not be found", true);
    return;
  }

  console.log(`Extension ${manifest.name} loaded!`);
  Spicetify.showNotification("Parent container found!");

  const root = document.createElement("div");
  root.className += "WhoAddedWidgetContainer";
  barElement.appendChild(root);

  ReactDOM.render(
    <Widget />,
    root
  );
}

async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  window.addEventListener("DOMContentLoaded", init);
}

export default main;
