"use client";

import React, { forwardRef } from "react";

// Images
import { FaPause } from "react-icons/fa6";
import { RxEnterFullScreen } from "react-icons/rx";
import { VideoPlayIcon, VideoVolumeMax, VideoVolumeX } from "./VideoPlayerSVGs";

// Imports
import Tooltip from "../Tooltip/Tooltip";
import { formatVideoPlayerTime } from "./data";
import { useVideoPlayerContext } from "./VideoPlayerContext";

const VideoPlayerDefaultControls = forwardRef<HTMLInputElement, object>(
  (_, rangeRef) => {
    const {
      isMuted,
      duration,
      isPlaying,
      currentTime,

      handlePlayPause,
      handleMuteToggle,
      handleTimeChange,
      handleFullscreen,
    } = useVideoPlayerContext();

    return (
      <div
        className="flex items-center gap-6"
        style={{ width: "max(370px, 80%)" }}
      >
        <div className="py-[2px] px-2 flex items-center gap-2 bg-[rgba(29,39,57,0.50)] text-white text-base font-medium">
          <p>{formatVideoPlayerTime(currentTime)}</p>
          <p>/</p>
          <p>{formatVideoPlayerTime(duration)}</p>
        </div>
        <input
          type="range"
          ref={rangeRef}
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleTimeChange}
          className="video-player-range flex-1"
        />
        <div className="py-[2px] px-2 flex items-center gap-6">
          <Tooltip
            normal_case
            position="top"
            text={`${isPlaying ? "Pause" : "Play"} (space)`}
            className="w-6 h-6 min-w-6 min-h-6 max-w-6 max-h-6"
          >
            <button
              onClick={handlePlayPause}
              className="w-6 h-6 flex items-center justify-center custom-ripple-bg custom-ripple-effect"
            >
              {isPlaying ? (
                <FaPause size={24} color="white" />
              ) : (
                <VideoPlayIcon />
              )}
            </button>
          </Tooltip>
          <Tooltip
            normal_case
            position="top"
            text={`${isMuted ? "Unmute" : "Mute"} (m)`}
            className="w-6 h-6 min-w-6 min-h-6 max-w-6 max-h-6"
          >
            <button
              onClick={handleMuteToggle}
              className="custom-ripple-bg custom-ripple-effect"
            >
              {isMuted ? <VideoVolumeX /> : <VideoVolumeMax />}
            </button>
          </Tooltip>
          <Tooltip
            normal_case
            position="top"
            text="Fullscreen (f)"
            className="w-6 h-6 min-w-6 min-h-6 max-w-6 max-h-6"
          >
            <button
              onClick={handleFullscreen}
              className="custom-ripple-bg custom-ripple-effect"
            >
              <RxEnterFullScreen size={24} color="white" />
            </button>
          </Tooltip>
        </div>
      </div>
    );
  }
);

VideoPlayerDefaultControls.displayName = "VideoPlayerDefaultControls";

export default VideoPlayerDefaultControls;
