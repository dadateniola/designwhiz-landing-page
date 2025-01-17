"use client";

import React from "react";

// Imports
import clsx from "clsx";
import Loader from "../loader/laoder";
import { useVideoPlayerContext } from "./VideoPlayerContext";

const VideoPlayerClickableArea = () => {
  const { isBuffering, handlePlayPause } = useVideoPlayerContext();

  return (
    <div
      className="absolute inset-0 w-full bg-transparent"
      style={{ padding: 0, height: "calc(100% - (16px + 28px))" }}
    >
      <div
        className={clsx(
          "absolute top-6 right-6 w-10 h-10 bg-[rgba(255,255,255,0.5)] rounded-full",
          "pointer-events-none transition-opacity duration-300",
          isBuffering ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <Loader scale={2} />
      </div>
      <div
        onClick={handlePlayPause}
        className="w-full h-full cursor-pointer"
      ></div>
    </div>
  );
};

export default VideoPlayerClickableArea;
