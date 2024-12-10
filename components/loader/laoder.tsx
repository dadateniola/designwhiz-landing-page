"use client";

import React, { useEffect, useRef } from "react";

// Types
import type { LoaderProps } from "./types";

// Imports
import clsx from "clsx";
import gsap from "gsap";

const Loader: React.FC<LoaderProps> = ({
  dots = 3,
  size = 3,
  color = "#6C50E0",
  scale = 1.5,
  gap = 8,
  stagger = 0.2,
  className,
  style,
}) => {
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.5, stagger },
      repeat: -1,
    });

    const dotsElem = dotsRef.current;

    timeline
      .to(dotsElem, { scale, opacity: 1 })
      .to(dotsElem, { scale: 1, opacity: 0.5 }, `-=${(dots - 1) * stagger}`);

    return () => {
      timeline.kill();
    };
  }, [scale, stagger, dots]);

  return (
    <div
      className={clsx(
        "flex-1 w-full h-full flex items-center justify-center",
        className
      )}
      style={{
        gap: `${gap}px`,
        ...style,
      }}
    >
      {Array(dots)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="rounded-full opacity-50"
            style={{
              width: size,
              height: size,
              minWidth: size,
              minHeight: size,
              backgroundColor: color,
            }}
            ref={(el) => {
              if (el && !dotsRef.current.includes(el)) {
                dotsRef.current[index] = el;
              }
            }}
          />
        ))}
    </div>
  );
};

export default Loader;
