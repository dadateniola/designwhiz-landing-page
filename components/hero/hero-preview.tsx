import React from "react";
import Image from "next/image";

// Images
import Feed from "@/public/images/hero/feed.png";
import Frames from "@/public/images/hero/frames.png";
import Resources from "@/public/images/hero/resources.png";

const HeroPreview = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute h-full top-0 left-2/4 -translate-x-2/4">
        <Image
          src={Resources}
          alt="resources page"
          width={1500}
          className="w-auto h-full"
          style={{
            boxShadow:
              "0px -2.164px 1.731px -0.898px #E2E3F2 inset, -10.154px 10.154px 16.246px -0.406px rgba(0, 0, 0, 0.08)",
          }}
        />
        <div className="absolute bottom-0 left-2/4 -translate-x-2/4 w-[105%] h-[90%] bg-[rgba(0,0,0,0.1)] blur-[47px] pointer-events-none"></div>
      </div>
      <div className="w-full grid grid-cols-5">
        <Image
          src={Frames}
          alt="frames page"
          width={1500}
          className="w-full h-auto col-span-2"
          style={{
            boxShadow: "0.37px 6.152px 7.69px 0px rgba(75, 75, 75, 0.06)",
          }}
        />
        <div></div>
        <Image
          src={Feed}
          alt="feed page"
          width={1500}
          className="w-full h-auto col-span-2"
          style={{
            boxShadow:
              "0px 5.832px 14.579px -2.916px rgba(197, 197, 197, 0.08)",
          }}
        />
      </div>
    </div>
  );
};

export default HeroPreview;
