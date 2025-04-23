import manifest from "../../package.json";

// The selector type is needed for the following statements (e.g. period for classname and hashtag for id)
export const BUTTON_INJECTION_TARGET: string = ".main-nowPlayingWidget-nowPlaying"; 
export const WIDGET_INJECTION_TARGET_NORMAL: string = ".main-navBar-mainNav";
export const WIDGET_INJECTION_TARGET_FULLSCREEN: string = "#VideoPlayerCinema_ReactPortal";
export const PEEK_DETECTION_TARGET: string = ".main-yourLibraryX-libraryItemContainer";

export const MAX_TRIES: number = 10;
export const EXTENSION_NAME: string = manifest.name;
