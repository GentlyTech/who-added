/**
 * REST API interfaces
 */

export interface RESTImage {
  url: string;
  width: number;
  height: number;
}

export interface RESTUserInfo {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: RESTImage[];
  type: string;
  uri: string;
}

export interface RESTPlaylistData {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: RESTImage[];
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
  };
  public: boolean;
  snapshot_id: string;
  tracks: RESTTrack;
  type: string;
  uri: string;
}

interface RESTTrack {
  href: string;
  items: {
    added_at: string;
    added_by: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      type: string;
      uri: string;
    };
    is_local: boolean;
    primary_color: string;
    track: {
      album: {
        album_type: string;
        artists: [
          {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }
        ];
        available_markets: string[];
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        images: RESTImage[];
        name: string;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        uri: string;
      };
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      available_markets: string[];
      disc_number: number;
      duration_ms: number;
      episode: boolean;
      explicit: boolean;
      external_ids: {
        isrc: string;
      };
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_local: boolean;
      name: string;
      popularity: number;
      preview_url: string;
      track: boolean;
      track_number: number;
      type: string;
      uri: string;
    };
    video_thumbnail: {
      url: string;
    };
  }[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

/**
 * PlatformAPI specific interfaces
 */

export interface PlatformArtist {
  name: string;
  type: string;
  uri: string;
}

export interface PlatformImage {
  label: string;
  url: string;
}

export interface PlatformUser {
  type: string;
  uri: string;
  username: string;
  displayName: string;
  images: RESTImage[];
  optInTrialPremiumOnlyMarket: boolean;
}

export interface PlatformUserCollaboratorItem {
  isOwner: boolean;
  tracksAdded: number;
  user: PlatformUser;
}

export interface PlatformTrack {
  addedAt: string;
  addedBy: {
    type: string;
    uri: string;
    username: string;
    displayName: string;
    images: PlatformImage[];
  };
  album: {
    type: string;
    uri: string;
    name: string;
    artist: PlatformArtist;
    images: PlatformImage[];
  };
  artists: PlatformArtist[];
  discNumber: number;
  duration: { milliseconds: number };
  formatListAttributes: {
    id: string;
    is19PlusOnly: boolean;
    isExplicit: boolean;
    isLocal: boolean;
    isPlayable: boolean;
    name: string;
    playIndex?: number;
    trackNumber: number;
    type: string;
    uid: string;
    uri: string;
  };
  id: string;
  is19PlusOnly: boolean;
  isExplicit: boolean;
  isLocal: boolean;
  isPlayable: boolean;
  name: string;
  playIndex?: number;
  trackNumber: number;
  type: string;
  uid: string;
  uri: string;
}

export interface PlatformPlaylistMetadata {
  type: string;
  uri: string;
  name: string;
  description: string;
  images: PlatformImage[];
  madeFor: null;
  owner: {
    type: string;
    uri: string;
    username: string;
    displayName: string;
    images: PlatformImage[];
  };
  totalLength: number;
  totalLikes: number;
  duration: {
    milliseconds: number;
    isEstimate: boolean;
  };
  isCollaborative: boolean;
  isOwnedBySelf: boolean;
  isPublished: boolean;
  hasEpisodes?: boolean;
  hasSpotifyTracks: boolean;
  canAdd: boolean;
  canRemove: boolean;
  canPlay: boolean;
  formatListData: null;
  canReportAnnotationAbuse: boolean;
  hasDateAdded: boolean;
  permissions: {
    canView: boolean;
    canAdministratePermissions: boolean;
    canCancelMembership: boolean;
    isPrivate: boolean;
  };
  collaborators: {
    count: number;
    items: PlatformUserCollaboratorItem[];
  };
}

export interface PlatformPlaylistContents {
  items: PlatformTrack[];
  limit: number;
  offset: number;
  totalLength: number;
}
