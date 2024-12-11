"use client";

import React, { useEffect, useRef } from "react";

// Types
import type { BenefitsCardProps } from "./types";

// Imports
import CTA from "../cta/cta";

const BenefitsCard: React.FC<BenefitsCardProps> = ({
  list = [],
  video,
  heading,
  subheading,
}) => {
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Functions
  const handleEnter = () => {
    const video = videoRef.current;
    if (video) video.play();
  };

  const handleLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Effects
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) handleEnter();
        else handleLeave();
      },
      {
        threshold: 0.5, // [0, 0.5]
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-4 rounded-3xl bg-white"
      style={{
        backdropFilter: "blur(6px)",
        boxShadow:
          "0px 0px 0px 2px #FFF inset, 0px 4px 2px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 24px 4px rgba(0, 0, 0, 0.04) inset, 0px -10.44px 17.15px -6.67px #E2E3F2 inset",
      }}
    >
      <div className="flex gap-[85px]">
        <div className="w-[337px] custom-flex-col gap-8 justify-between">
          <div className="p-4 custom-flex-col gap-8">
            <div className="custom-flex-col gap-1">
              <p className="text-black text-2xl xl:text-[28px] font-medium leading-8">
                {heading}
              </p>
              <p className="text-neutral-200 text-base font-normal">
                {subheading}
              </p>
            </div>
            <div className="custom-flex-col gap-5">
              {list.map(({ desc, title }, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex items-start">
                    <p className="text-text-soft text-sm font-medium">01</p>
                  </div>
                  <div className="custom-flex-col gap-2">
                    <p className="text-[#0E0523] text-base font-medium">
                      {title}
                    </p>
                    <p className="text-neutral-200 text-sm font-normal">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CTA type="black" className="py-[10px]">
            Get Started
          </CTA>
        </div>
        <div className="relative flex-1 aspect-[4/3] bg-neutral-100 rounded-[14px] overflow-hidden">
          <video
            loop
            muted
            playsInline
            ref={videoRef}
            className="relative z-[1] w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="absolute z-[2] inset-0 w-full h-full rounded-[14px]"
            style={{
              boxShadow:
                "0px 0px 0px 2px rgba(219, 219, 219, 0.38) inset, 0px 4px 2px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 24px 4px rgba(0, 0, 0, 0.04) inset",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
