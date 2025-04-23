export interface WidgetData {
  userInfo: {
    culprit: string;
    culpritProfileSrc: string;
    avatarSrc: string;
  };
  playlistData: {
    playlistSrc: string;
    playlistTitle: string;
    playlistArtSrc: string | JSX.Element;
  };
}
