"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// Imports
import clsx from "clsx";
import { getHeroMockupImage } from "./data";

import {
  HeroMockupPreviewError,
  HeroMockupPreviewLoader,
} from "./hero-components";

import { useHeroMockupContext } from "./hero-mockup-context";

const HeroMockupPreview = () => {
  // Hooks
  const { activeAction } = useHeroMockupContext();

  // States
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Reset loading and error state whenever `activeAction` changes
    setError(false);
    setLoading(true);
  }, [activeAction]);

  return (
    <div className="relative z-[1] flex-1">
      {loading && !error && <HeroMockupPreviewLoader />}
      {error && <HeroMockupPreviewError />}
      <Image
        src={getHeroMockupImage(activeAction)}
        alt={`${activeAction} page`}
        fill
        sizes="(max-width: 768px) 150vw, (max-width: 1024px) 1000px, 1500px"
        className={clsx(
          "object-cover object-top transition-opacity duration-300",
          {
            invisible: error,
            "opacity-0": error || loading,
          }
        )}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

export default HeroMockupPreview;
