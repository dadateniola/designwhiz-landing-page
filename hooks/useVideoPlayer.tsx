"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";

// Types
import {
  VideoPlayerStates,
  UseVideoPlayerReturnType,
} from "@/components/VideoPlayer/types";

// Imports
import gsap from "gsap";

export const useVideoPlayer = ({
  muted,
  controls,
}: {
  muted?: boolean;
  controls: {
    alwaysVisible?: boolean;
    element: HTMLDivElement | null;
  };
}): UseVideoPlayerReturnType => {
  // States
  const [state, setState] = useState<VideoPlayerStates>({
    duration: 0,
    currentTime: 0,

    isMuted: !!muted,
    isPlaying: false,
    playedOnce: false,
    isBuffering: false,

    aspectRatio: null,
  });

  // Constants
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const mouseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Memos
  const { alwaysShowControls } = useMemo(() => {
    const alwaysShowControls = controls.alwaysVisible;

    return { alwaysShowControls };
  }, [controls.alwaysVisible]);

  // Refs
  const isBuffering = useRef<boolean>(false);
  const isMouseMoving = useRef<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<HTMLDivElement | null>(controls.element);

  // Sync controlsRef with controls.element
  useEffect(() => {
    controlsRef.current = controls.element;
  }, [controls.element]);

  // Function to show controls
  const showControls = useCallback(() => {
    if (controlsRef.current) {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      gsap.to(controlsRef.current, { opacity: 1, duration: 0.3 });
      if (controlsRef.current)
        controlsRef.current.classList.remove("no-cursor"); // Show cursor
    }
  }, []);

  // Function to hide controls with optional delay
  const hideControls = useCallback(
    (force = false) => {
      if (alwaysShowControls || isBuffering.current) return;

      const delay = 1000;
      const isPlaying = force || state.isPlaying;
      if (controlsRef.current && isPlaying) {
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
          if (alwaysShowControls || isBuffering.current) return;
          gsap.to(controlsRef.current, { opacity: 0, duration: 0.3 });
          if (controlsRef.current)
            controlsRef.current.classList.add("no-cursor"); // Hide cursor
        }, delay); // Delay for hiding controls
      }
    },
    [state.isPlaying, alwaysShowControls]
  );

  // Play/pause toggle with control visibility management
  const handlePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        hideControls(true);
      } else {
        video.pause();
        showControls();
      }
    }
  }, [hideControls, showControls]);

  // Mute toggle
  const handleMuteToggle = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      showControls();
      hideControls(); // Show briefly after mute
    }
  }, [showControls, hideControls]);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(event.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setState((prev) => ({ ...prev, currentTime: newTime }));
    }
  };

  const updateCurrentTime = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setState((prev) => ({
        ...prev,
        currentTime: Math.min(video.currentTime, video.duration),
      }));
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setState((prev) => ({
        ...prev,
        aspectRatio: video.videoWidth / video.videoHeight,
        duration: video.duration,
      }));
    }
  }, []);

  const handleVideoEnd = useCallback(() => {
    showControls();
    setState((prev) => ({
      ...prev,
      isPlaying: false,
      currentTime: prev.duration,
    }));
  }, [showControls]);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleFullscreen = () => {
    const video = videoRef.current as any;

    if (!video) return;

    try {
      if (!document.fullscreenElement) {
        // Enter fullscreen
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          // iOS Safari-specific
          video.webkitEnterFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        } else {
          console.warn("Fullscreen API is not supported in this browser.");
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
        } else {
          console.warn("Exit fullscreen is not supported in this browser.");
        }
      }
    } catch (error) {
      console.error("Error attempting to enter fullscreen mode:", error);
    }
  };

  /* eslint-enable @typescript-eslint/no-explicit-any */

  // Keyboard controls with brief controls visibility
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // ------ (Space) ------
      if (event.code === "Space") {
        event.preventDefault(); // Prevent scrolling the page
        handlePlayPause(); // Toggle pause / play
      }
      // ------ (M) ------
      else if (event.key === "m" || event.key === "M") {
        handleMuteToggle(); // Toggle mute
      }
      // ------ (F) ------
      else if (event.key === "f" || event.key === "F") {
        event.preventDefault(); // Prevent unwanted side effects
        handleFullscreen(); // Trigger fullscreen
      }
      // ------ (ArrowRight) / (ArrowLeft) ------
      else if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
        if (videoRef.current) {
          event.preventDefault(); // Prevent scrolling

          showControls();
          hideControls(); // Show controls briefly for seeking

          const timeOffset = event.code === "ArrowRight" ? 5 : -5;
          videoRef.current.currentTime = Math.min(
            Math.max(0, state.currentTime + timeOffset),
            state.duration
          ); // Update video current time
          updateCurrentTime(); // Update the currentTime state
        }
      }
    },
    [
      state.duration,
      state.currentTime,
      showControls,
      hideControls,
      handlePlayPause,
      handleMuteToggle,
      updateCurrentTime,
    ]
  );

  // Mouse move event listener to show/hide controls
  const handleMouseMove = useCallback(() => {
    if (!isMouseMoving.current) {
      isMouseMoving.current = true;
      showControls();
      // Reset hideControls timeout when mouse moves
      if (mouseTimeout.current) clearTimeout(mouseTimeout.current);
      mouseTimeout.current = setTimeout(() => {
        isMouseMoving.current = false;
        hideControls();
      }, 2000); // Change this duration as needed
    } else {
      // If mouse is already moving, just reset the timeout
      if (mouseTimeout.current) clearTimeout(mouseTimeout.current);
      mouseTimeout.current = setTimeout(() => {
        isMouseMoving.current = false;
        hideControls();
      }, 2000); // Change this duration as needed
    }
  }, [hideControls, showControls]);

  useEffect(() => {
    const video = videoRef.current;
    const controls = controlsRef.current;

    const handlePlay = () => {
      setState((prev) => ({
        ...prev,
        isPlaying: true,
        playedOnce: true,
      }));
    };

    const handlePause = () => {
      setState((prev) => ({
        ...prev,
        isPlaying: false,
      }));
    };

    const handleVolumeChange = () => {
      if (video) {
        setState((prev) => ({
          ...prev,
          isMuted: video.muted,
        }));
      }
    };

    const handleBuffering = () => {
      if (video && !video.paused) {
        // Only set buffering to true if the video is not paused
        setState((prev) => ({
          ...prev,
          isBuffering: true,
        }));
        isBuffering.current = true;
      }
    };

    const handleTimeUpdate = () => {
      // Clear buffering if video progresses, even if paused
      if (
        video &&
        video.currentTime > 0 &&
        !video.seeking &&
        isBuffering.current
      ) {
        setState((prev) => ({
          ...prev,
          isBuffering: false,
        }));
        isBuffering.current = false;
      }
    };

    if (controls) {
      controls.addEventListener("mousemove", handleMouseMove);
    }

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("volumechange", handleVolumeChange);
      video.addEventListener("waiting", handleBuffering);
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (controls) {
        controls.removeEventListener("mousemove", handleMouseMove);
      }

      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("volumechange", handleVolumeChange);
      }
    };
  }, [videoRef, handleMouseMove]);

  return {
    ...state,
    videoRef,
    showControls,
    hideControls,
    handleKeyDown,
    handleVideoEnd,
    handlePlayPause,
    handleFullscreen,
    handleMuteToggle,
    handleTimeChange,
    updateCurrentTime,
    handleLoadedMetadata,
  };
};
