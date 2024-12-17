"use client";

import React, { CSSProperties, useCallback, useEffect, useRef } from "react";

// Types
import type { VideoPlayerProps } from "./types";

// Imports
import VideoPlayerStart from "./VideoPlayerStart";
import VideoPlayerRewatch from "./VideoPlayerRewatch";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import { VideoPlayerContext } from "./VideoPlayerContext";
import VideoPlayerClickableArea from "./VideoPlayerClickableArea";
import VideoPlayerMinimalControls from "./VideoPlayerMinimalControls";
import VideoPlayerDefaultControls from "./VideoPlayerDefaultControls";

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, options = {} }) => {
  // Constants
  const { loop, muted, controls, overlayFitMode, disableKeyActions } = options;

  const controlType = controls?.type;
  const keyActions = !disableKeyActions;
  const controlsAlwaysVisible = controls?.alwaysVisible;

  const styleOptions: CSSProperties = {
    maxHeight: options.maxHeight || "100%",
    width: overlayFitMode === "cover" ? "100%" : undefined,
    height: overlayFitMode === "cover" ? "100%" : undefined,
  };

  // This has to be untop as it is being used in the hook below
  const videoOverlayRef = useRef<HTMLDivElement>(null);

  // Hook call
  const data = useVideoPlayer({
    muted,
    controls: {
      element: videoOverlayRef.current,
      alwaysVisible: controlsAlwaysVisible,
    },
  });
  const {
    duration,
    currentTime,

    playedOnce,
    aspectRatio,

    videoRef,

    showControls,
    hideControls,
    handleKeyDown,
    handleVideoEnd,
    updateCurrentTime,
    handleLoadedMetadata,
  } = data;

  // Refs
  const rangeRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to update the slider background based on the currentTime
  const updateSliderBackground = (value: number) => {
    const rangeElement = rangeRef.current;
    if (rangeElement) {
      const min = parseInt(rangeElement.min);
      const max = parseInt(rangeElement.max);
      const percentage = Math.ceil(((value - min) / (max - min)) * 100) || 0;
      rangeElement.style.setProperty("--value", `${percentage}%`);
    }
  };

  // Adjust the video size based on the container's size and aspect ratio
  const adjustVideoSize = useCallback(() => {
    if (!aspectRatio || !containerRef.current || !videoOverlayRef.current)
      return;

    const container = containerRef.current;
    const videoOverlay = videoOverlayRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Calculate based on aspect ratio
    const containerAspectRatio = containerWidth / containerHeight;

    if (containerAspectRatio > aspectRatio) {
      // Container is wider than the video, fit to height
      videoOverlay.style.height = "100%";
      videoOverlay.style.width = `${containerHeight * aspectRatio}px`;
    } else {
      // Container is taller than the video, fit to width
      videoOverlay.style.width = "100%";
      videoOverlay.style.height = `${containerWidth / aspectRatio}px`;
    }
  }, [aspectRatio]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", updateCurrentTime);
      video.addEventListener("ended", handleVideoEnd);

      if (keyActions) document.addEventListener("keydown", handleKeyDown);

      if (video.readyState >= 1) {
        handleLoadedMetadata();
      }
    }
    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", updateCurrentTime);
        video.removeEventListener("ended", handleVideoEnd);

        if (keyActions) document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [
    videoRef,
    keyActions,

    handleKeyDown,
    handleVideoEnd,
    updateCurrentTime,
    handleLoadedMetadata,
  ]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && overlayFitMode !== "cover") {
      const observer = new ResizeObserver(adjustVideoSize);
      observer.observe(container);
      return () => observer.unobserve(container);
    }
  }, [overlayFitMode, adjustVideoSize]);

  useEffect(() => {
    // Initial update on component mount and whenever currentTime changes
    updateSliderBackground(currentTime);
  }, [currentTime]);

  useEffect(() => {
    const handleInput = () => {
      const value = parseInt(rangeRef.current?.value || "0");
      // Update using requestAnimationFrame for smoother UI updates
      requestAnimationFrame(() => updateSliderBackground(value));
    };

    const rangeElement = rangeRef.current;
    if (rangeElement) {
      // Add event listener for input events
      rangeElement.addEventListener("input", handleInput);
    }

    // Cleanup event listener on unmount
    return () => {
      if (rangeElement) {
        rangeElement.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <VideoPlayerContext.Provider value={data}>
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
      >
        <video
          src={src}
          playsInline
          loop={loop}
          muted={muted}
          ref={videoRef}
          preload="metadata"
          className="w-full h-full object-contain"
          style={{ maxHeight: styleOptions.maxHeight }}
        />
        <div
          ref={videoOverlayRef}
          onMouseEnter={showControls}
          onMouseLeave={() => hideControls()}
          style={{
            pointerEvents: "none",
            width: styleOptions.width,
            height: styleOptions.height,
          }}
          className="absolute [&>*]:w-full [&>*]:h-full [&>*]:p-4 [&>*>*]:pointer-events-auto"
        >
          {currentTime !== duration && (
            <>
              <VideoPlayerClickableArea />

              <div className="relative flex flex-col items-center justify-between">
                <div></div>
                {!playedOnce && <VideoPlayerStart />}
                {!playedOnce ? (
                  <div></div>
                ) : controlType === "minimal" ? (
                  <VideoPlayerMinimalControls />
                ) : (
                  <VideoPlayerDefaultControls ref={rangeRef} />
                )}
              </div>
            </>
          )}
          {playedOnce && currentTime === duration && <VideoPlayerRewatch />}
        </div>
      </div>
    </VideoPlayerContext.Provider>
  );
};

export default VideoPlayer;
