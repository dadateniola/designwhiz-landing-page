"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

// Types
import { HeroTextSliderProps } from "./types";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import { getStyle } from "@/utils/general";

const HeroTextSlider: React.FC<HeroTextSliderProps> = ({ text = [] }) => {
  // States
  const [index, setIndex] = useState<number>(1);
  const [height, setHeight] = useState<number>(0);

  // Refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  // Function to calculate and set the height
  const updateHeight = useCallback(() => {
    if (textRef.current) {
      const lineHeight = getStyle(textRef.current, "lineHeight");
      setHeight(parseInt(lineHeight));
    }
  }, []);

  // Initialize height once and update on resize
  useEffect(() => {
    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [updateHeight]);

  const animateSlider = useCallback(() => {
    if (containerRef.current) {
      const timeline = gsap.timeline();

      timeline.to(containerRef.current, {
        delay: 2,
        y: -height * index,
        ease: "expo.out",
      });

      if (index === text.length) {
        timeline.set(containerRef.current, { y: 0 }).call(() => setIndex(1));
      } else {
        timeline.call(() => setIndex((idx) => Math.min(idx + 1, text.length)));
      }
    }
  }, [height, index, text.length]);

  // Only run animation when height or index changes
  useEffect(() => {
    if (height && index > 0) {
      animateSlider();
    }
  }, [height, index, animateSlider]);

  return (
    <div
      style={{ height }}
      className={clsx("pr-1 overflow-hidden duration-300", {
        "opacity-0": height === 0,
        "opacity-100": height > 0,
      })}
    >
      <div
        ref={containerRef}
        className="custom-flex-col text-purple-base text-sm md:text-base font-semibold leading-5 italic capitalize"
      >
        {text.map((txt, idx) => (
          <p key={idx} ref={idx === 0 ? textRef : null}>
            {txt}
          </p>
        ))}
        <p>{text[0]}</p>
      </div>
    </div>
  );
};

export default HeroTextSlider;
