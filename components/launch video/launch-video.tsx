"use client";

import React, { useRef } from "react";

// Types
import type { LaunchVideoProps } from "./types";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LaunchVideoCloseIcon } from "../svg/svg";
import { SectionLabel } from "../global-components";
import useWindowWidth from "@/hooks/useWindowWidth";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useLandingPageContext } from "../landing-page-context";

const LaunchVideo: React.FC<LaunchVideoProps> = ({ className }) => {
  // Hooks
  const { isCustom } = useWindowWidth(900);
  const { disableScroll, closeLaunchVideo } = useLandingPageContext();

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation
  useGSAP(() => {
    const container = containerRef.current;

    if (container) {
      const timeline = gsap.timeline();

      timeline
        .call(() => {
          disableScroll();
        })
        .from(container, {
          delay: 0.3,
          scale: 0.95,
          autoAlpha: 0,
          ease: "expo.out",
        });
    }
  });

  return (
    <div
      data-launch-video
      ref={containerRef}
      className={clsx(
        "fixed inset-0 w-full h-screen overflow-hidden bg-white",
        className
      )}
    >
      <div
        className="absolute z-[1] inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(128, 47, 209, 0.00) 50%, rgba(156, 83, 250, 0.37) 239.02%), #FAF9FF",
        }}
      ></div>
      <div className="relative z-[2] w-full h-full px-4 xs:px-6 flex items-center justify-center">
        <div className="custom-flex-col gap-6 w-full navbar:max-w-[min(80vw,1100px)]">
          <div className="flex gap-3 justify-end navbar:justify-center">
            <SectionLabel icon={false} style={{ height: 35 }}>
              DesignWhiz launch video
            </SectionLabel>
            <button onClick={closeLaunchVideo}>
              <SectionLabel
                icon={false}
                customContent
                style={{ width: 35, height: 35, padding: 3 }}
              >
                <div className="w-full h-full flex items-center justify-center rounded-full bg-purple-0">
                  <LaunchVideoCloseIcon />
                </div>
              </SectionLabel>
            </button>
          </div>
          <div
            className={clsx(
              "relative w-full h-full aspect-video overflow-hidden",
              "rounded-2xl md:rounded-3xl lg:rounded-[34px]"
            )}
            style={{
              boxShadow: "0px 4px 12px 0px rgba(226, 227, 242, 0.50)",
            }}
          >
            <div className="absolute inset-0 w-full h-full bg-neutral-100 animate-pulse"></div>
            <VideoPlayer
              src="https://res.cloudinary.com/dr1jj9cad/video/upload/v1736860105/Launch_Video_short_gwg7k4.mp4"
              options={{
                maxHeight: "80vh",
                disableKeyActions: isCustom,
                controls: {
                  alwaysVisible: isCustom,
                  type: isCustom ? "minimal" : "default",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchVideo;
