export interface VideoPlayerStates {
  duration: number;
  currentTime: number;

  isMuted: boolean;
  isPlaying: boolean;
  playedOnce: boolean;
  isBuffering: boolean;

  aspectRatio: number | null;
}

export interface UseVideoPlayerReturnType extends VideoPlayerStates {
  videoRef: React.RefObject<HTMLVideoElement | null>;

  showControls: () => void;
  hideControls: (force?: boolean) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleVideoEnd: () => void;
  handlePlayPause: () => void;
  handleFullscreen: () => void;
  handleMuteToggle: () => void;
  handleTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateCurrentTime: () => void;
  handleLoadedMetadata: () => void;
}

export type VideoPlayerContextProps = UseVideoPlayerReturnType;

export interface VideoPlayerProps {
  src: string;
  options?: {
    loop?: boolean;
    muted?: booleen;
    maxHeight?: string;
    disableKeyActions?: boolean;
    controls?: {
      alwaysVisible?: boolean;
      type?: "default" | "minimal";
    };
    overlayFitMode?: "contain" | "cover";
  };
}

export interface VidoePlayerSVGProps {
  size?: number;
  color?: string;
}
