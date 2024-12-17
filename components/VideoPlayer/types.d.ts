export type UseVideoPlayerReturnType = {
  duration: number;
  currentTime: number;
  isMuted: boolean;
  isPlaying: boolean;
  playedOnce: boolean;
  aspectRatio: number | null;

  videoRef: React.RefObject<HTMLVideoElement | null>;

  showControls: () => void;
  hideControls: (force?: boolean) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleVideoEnd: () => void;
  handlePlayPause: () => void;
  handleMuteToggle: () => void;
  handleTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateCurrentTime: () => void;
  handleLoadedMetadata: () => void;
};

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
