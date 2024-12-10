import React from "react";

// Images
import { FramesIcon } from "../svg/svg";

const HeroMockupNav = () => {
  return (
    <div className="custom-flex-col gap-6">
      <div className="hero-mockup-nav-shadow p-[5px] bg-white border border-solid border-[rgba(0,0,0,0.05)] rounded-full">
        <div className="relative flex">
          <button className="hero-mockup-nav-action-shadow py-3 px-4 flex items-center gap-3 rounded-full">
            <FramesIcon />
            <p className="text-text-sub text-sm font-medium leading-5 capitalize">
              frames
            </p>
          </button>
        </div>
      </div>
      <p className="text-text-sub text-xl font-normal text-center leading-[30px] -tracking-[0.4px]">
        Finally a platform with features intentionally
        <br />
        designed for your growth
      </p>
    </div>
  );
};

export default HeroMockupNav;
