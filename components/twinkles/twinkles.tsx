"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

// Images
import TwinklesImage from "@/public/images/twinkles.webp";

// Imports
import clsx from "clsx";

const Twinkles = () => {
  // States
  const [imagesNeeded, setImagesNeeded] = useState(0);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);

  // Functions
  const updateImageCount = ([entry]: ResizeObserverEntry[]) => {
    const { width, height } = entry.contentRect;

    setImagesNeeded(Math.floor(width / height));
  };

  // Effects
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const observer = new ResizeObserver(updateImageCount);

      observer.observe(container);

      return () => observer.unobserve(container);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "twinkles",
        "absolute inset-0 w-full h-full overflow-hidden flex justify-between",
        "pointer-events-none opacity-0 transition-opacity duration-300"
      )}
    >
      {Array.from({ length: imagesNeeded }).map((_, idx) => (
        <Image
          key={idx}
          src={TwinklesImage}
          alt="twinkle"
          className="w-auto h-full"
        />
      ))}
    </div>
  );
};

export default Twinkles;
