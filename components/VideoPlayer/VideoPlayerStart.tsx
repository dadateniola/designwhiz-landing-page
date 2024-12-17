"use client";

import React from "react";

// Images
import { VideoPlayIcon } from "./VideoPlayerSVGs";

// Imports
import { useVideoPlayerContext } from "./VideoPlayerContext";

const VideoPlayerStart = () => {
  const { handlePlayPause } = useVideoPlayerContext();

  return (
    <button
      onClick={handlePlayPause}
      className="w-20 h-20 rounded-full flex items-center justify-center pointer-events-auto"
      style={{
        backdropFilter: "blur(4px)",
        background: "rgba(29, 39, 57, 0.50)",
      }}
    >
      <VideoPlayIcon size={40} />
    </button>
  );
};

export default VideoPlayerStart;
