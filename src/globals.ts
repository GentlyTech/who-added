import manifest from "../package.json";

export const BUTTON_INJECTION_TARGET: string = ".main-nowPlayingWidget-nowPlaying"; // The selector type is needed (e.g. period for classname and hashtag for id)
export const WIDGET_INJECTION_TARGET: string = ".main-navBar-mainNav"; // The selector type is needed (e.g. period for classname and hashtag for id)
export const MAX_TRIES: number = 10;
export const EXTENSION_NAME: string = manifest.name;
