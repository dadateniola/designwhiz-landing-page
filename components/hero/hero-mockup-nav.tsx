"use client";

import React from "react";

// Types
import type { HeroMockupNavAction } from "./types";

// Imports
import { hero_mockup_nav_actions } from "./data";
import { HeroMockupNavButton } from "./hero-components";
import { useHeroMockupContext } from "./hero-mockup-context";

const HeroMockupNav = () => {
  const { activeAction, setActiveAction } = useHeroMockupContext();

  return (
    <div className="custom-flex-col gap-6">
      <div className="hero-mockup-nav-shadow p-[5px] bg-white border border-solid border-[rgba(0,0,0,0.05)] rounded-full">
        <div className="relative flex">
          {Object.keys(hero_mockup_nav_actions).map((actionString) => {
            const action = actionString as HeroMockupNavAction;

            return (
              <HeroMockupNavButton
                key={action}
                action={action}
                active={activeAction === action}
                onClick={() => setActiveAction(action)}
              />
            );
          })}
        </div>
      </div>
      <p className="text-[#9298A8] text-sm md:text-xl font-normal text-center leading-[20px] md:leading-[30px] -tracking-[0.4px]">
        Finally a platform with features intentionally
        <br />
        designed for your growth
      </p>
    </div>
  );
};

export default HeroMockupNav;
