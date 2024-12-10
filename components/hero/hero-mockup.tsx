"use client";

import React, { useState } from "react";

// Types
import type { HeroMockupNavAction } from "./types";

// Imports
import HeroMockupNav from "./hero-mockup-nav";
import HeroMockupSidebar from "./hero-mockup-sidebar";
import { HeroMockupContext } from "./hero-mockup-context";
import HeroMockupPreview from "./hero-mockup-preview";

const HeroMockup = () => {
  const [activeAction, setActiveAction] =
    useState<HeroMockupNavAction>("frames");

  return (
    <HeroMockupContext.Provider value={{ activeAction, setActiveAction }}>
      <div className="flex flex-col items-center gap-12">
        <div className="w-[918px] p-2 bg-white rounded-2xl">
          <div
            className="w-full border border-solid border-[#F2F2F2] bg-background-canvas rounded-lg overflow-hidden"
            style={{
              boxShadow:
                "0px -8.384px 6.707px -3.478px #E2E3F2 inset, -39.334px 39.334px 62.934px -1.573px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="w-full aspect-video flex">
              <HeroMockupSidebar />
              <HeroMockupPreview />
            </div>
          </div>
        </div>
        <HeroMockupNav />
      </div>
    </HeroMockupContext.Provider>
  );
};

export default HeroMockup;
