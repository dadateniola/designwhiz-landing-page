"use client";

import React, { useEffect, useRef } from "react";

// Types
import type { BenefitsCardProps } from "./types";

// Imports
import CTA from "../cta/cta";

import {
  BenefitsCardHeader,
  BenefitsCardList,
  BenefitsCardVideoOverlay,
} from "./benefits-components";

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
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      data-benefits-card
      className="navbar:absolute w-full p-4 pb-6 rounded-3xl bg-white will-change-transform"
      style={{
        backdropFilter: "blur(6px)",
        boxShadow:
          "0px 0px 0px 2px #FFF inset, 0px 4px 2px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 24px 4px rgba(0, 0, 0, 0.04) inset, 0px -10.44px 17.15px -6.67px #E2E3F2 inset",
      }}
    >
      <div className="w-full navbar:max-h-[75vh] flex flex-col navbar:flex-row gap-8 xl:gap-[85px]">
        <div className="w-full navbar:w-[310px] xl:w-[337px] custom-flex-col gap-8 justify-between">
          <div className="w-full flex-1 overflow-auto custom-scrollbar">
            <div className="w-full p-4 custom-flex-col gap-8">
              <BenefitsCardHeader heading={heading} subheading={subheading} />
              <BenefitsCardList list={list} />
            </div>
          </div>
          <CTA type="black" className="hidden navbar:flex py-[10px]">
            Get Started
          </CTA>
        </div>
        <div className="relative flex-1 aspect-video navbar:aspect-square bg-neutral-100 rounded-[14px] overflow-hidden">
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
          <BenefitsCardVideoOverlay />
        </div>
        <div className="navbar:hidden custom-flex-col gap-4">
          <div></div>
          <CTA type="black" className="py-[14px]" style={{ fontSize: "16px" }}>
            Get Started
          </CTA>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
