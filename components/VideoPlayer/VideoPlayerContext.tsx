"use client";

import { useContext, createContext } from "react";

// Types
import type { VideoPlayerContextProps } from "./types";

export const VideoPlayerContext = createContext<
  VideoPlayerContextProps | undefined
>(undefined);

export const useVideoPlayerContext = () => {
  const context = useContext(VideoPlayerContext);

  if (!context) {
    throw new Error(
      "useVideoPlayerContext must be used within a VideoPlayerContextProvider"
    );
  }

  return context;
};
