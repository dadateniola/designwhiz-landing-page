"use client";

import React from "react";

// Imports
import { formatVideoPlayerTime } from "./data";
import { useVideoPlayerContext } from "./VideoPlayerContext";

const VideoPlayerRewatch = () => {
  const { duration, handlePlayPause } = useVideoPlayerContext();

  return (
    <div
      className="relative flex flex-col items-center justify-between"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.90) 100%)",
      }}
    >
      <div></div>
      <button
        onClick={handlePlayPause}
        className="py-[10px] px-6 rounded-full bg-text-black pointer-events-auto border-[2px] border-solid border-transparent hover:border-[rgba(255,255,255,0.1)]"
      >
        <p className="text-white text-base font-semibold">Re-watch video</p>
      </button>
      <div className="flex w-full">
        <div className="py-[2px] px-2">
          <p className="text-white text-base font-medium">
            {formatVideoPlayerTime(duration)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerRewatch;
