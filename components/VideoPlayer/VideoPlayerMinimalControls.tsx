"use client";

import React from "react";

// Images
import { FaPause } from "react-icons/fa6";
import { VideoPlayIcon } from "./VideoPlayerSVGs";

// Imports
import Tooltip from "../Tooltip/Tooltip";
import { formatVideoPlayerTime } from "./data";
import { useVideoPlayerContext } from "./VideoPlayerContext";

const VideoPlayerMinimalControls = () => {
  const {
    duration,
    isPlaying,
    currentTime,

    handlePlayPause,
  } = useVideoPlayerContext();

  return (
    <div className="w-full flex items-center gap-6 justify-between">
      <div className="py-1 px-2 bg-[rgba(29,39,57,0.50)] flex gap-1 items-center">
        <Tooltip
          position="top"
          text={`${isPlaying ? "Pause" : "Play"}`}
          className="w-[18px] h-[18px] min-w-[18px] min-h-[18px] max-w-[18px] max-h-[18px]"
        >
          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <FaPause size={18} color="white" />
            ) : (
              <VideoPlayIcon size={18} />
            )}
          </button>
        </Tooltip>
        <p className="text-white text-base font-medium">
          {formatVideoPlayerTime(duration - currentTime)}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default VideoPlayerMinimalControls;
