"use client";

import React, { useState } from "react";

// Images
import Feed from "@/public/images/hero/feed.png";
import { HeroPreviewImage } from "./hero-components";
import Frames from "@/public/images/hero/frames.png";
import Resources from "@/public/images/hero/resources.png";

const HeroPreview = () => {
  // States
  const [imageStates, setImageStates] = useState({
    resources: { loaded: false, error: false },
    frames: { loaded: false, error: false },
    feed: { loaded: false, error: false },
  });

  // Functions
  const handleImageLoad = (key: string) => {
    setImageStates((prev) => ({
      ...prev,
      [key]: { loaded: true, error: false },
    }));
  };

  const handleImageError = (key: string) => {
    setImageStates((prev) => ({
      ...prev,
      [key]: { loaded: false, error: true },
    }));
  };

  return (
    <div className="relative pt-[5vw] lg:pt-10 xl:pt-20">
      <div className="relative w-full grid grid-cols-5">
        <HeroPreviewImage
          src={Frames}
          alt="frames page"
          className="w-full h-auto"
          states={imageStates.frames}
          containerClassName="col-span-2"
          onLoad={() => handleImageLoad("frames")}
          onError={() => handleImageError("frames")}
        />
        <div></div>
        <HeroPreviewImage
          src={Feed}
          alt="feed page"
          className="w-full h-auto"
          states={imageStates.feed}
          containerClassName="col-span-2"
          onLoad={() => handleImageLoad("feed")}
          onError={() => handleImageError("feed")}
        />
      </div>
      <div className="absolute h-full top-0 left-2/4 -translate-x-2/4">
        <HeroPreviewImage
          src={Resources}
          alt="resources page"
          containerClassName="h-full"
          className={"w-auto h-full"}
          states={imageStates.resources}
          onLoad={() => handleImageLoad("resources")}
          onError={() => handleImageError("resources")}
          style={{
            boxShadow:
              "0px -2.164px 1.731px -0.898px #E2E3F2 inset, -10.154px 10.154px 16.246px -0.406px rgba(0, 0, 0, 0.08)",
          }}
        />
        {/* <div className="absolute bottom-0 left-2/4 -translate-x-2/4 w-[105%] h-[90%] bg-[rgba(0,0,0,0.1)] blur-[47px] pointer-events-none"></div> */}
      </div>
    </div>
  );
};

export default HeroPreview;
