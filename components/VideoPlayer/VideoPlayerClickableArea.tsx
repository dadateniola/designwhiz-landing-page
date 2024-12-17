"use client";

import React from "react";

// Imports
import { useVideoPlayerContext } from "./VideoPlayerContext";

const VideoPlayerClickableArea = () => {
  const { handlePlayPause } = useVideoPlayerContext();

  return (
    <div
      className="absolute inset-0 w-full bg-transparent"
      style={{ padding: 0, height: "calc(100% - (16px + 28px))" }}
    >
      <div
        onClick={handlePlayPause}
        className="w-full h-full cursor-pointer"
      ></div>
    </div>
  );
};

export default VideoPlayerClickableArea;
