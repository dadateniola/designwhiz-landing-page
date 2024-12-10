"use client";

import React from "react";
import { Kanit } from "next/font/google";

// Types
import type { HeroMockupNavAction } from "./types";

// Images
import { DesignWhizLogo, PostArrowDown, SidebarDoubleArrow } from "../svg/svg";

// Imports
import clsx from "clsx";
import { hero_mockup_nav_actions, hero_mockup_sidebar_actions } from "./data";

import {
  HeroMockupSidebarButton,
  HeroMockupSidebarFooterIcon,
} from "./hero-components";

import { useHeroMockupContext } from "./hero-mockup-context";

const kanit = Kanit({ subsets: ["latin"], weight: "500" });

const HeroMockupSidebar = () => {
  const { activeAction, setActiveAction } = useHeroMockupContext();

  return (
    <div className="relative pl-5 pb-10 w-[172px] border-r border-solid border-neutral-100 flex flex-col justify-between">
      <div className="custom-flex-col gap-3">
        <div className="py-[13px] pr-4 flex items-center gap-1 border-b border-solid border-neutral-100">
          <DesignWhizLogo size={12} />
          <p
            className={clsx(
              kanit.className,
              "text-xs text-purple-base font-normal leading-3 -tracking-[0.627px]"
            )}
          >
            Designwhiz
          </p>
        </div>
        <div className="custom-flex-col gap-3 pr-4">
          <div className="custom-flex-col gap-[2px]">
            {hero_mockup_sidebar_actions.map((action) => {
              const isNavAction = action in hero_mockup_nav_actions;

              return (
                <HeroMockupSidebarButton
                  key={action}
                  action={action}
                  active={activeAction === action}
                  onClick={
                    isNavAction
                      ? () => setActiveAction(action as HeroMockupNavAction)
                      : undefined
                  }
                />
              );
            })}
          </div>
          <div className="border-b border-solid border-neutral-100"></div>
          <div
            className="p-[2px] rounded-full border border-solid border-purple-base bg-white pointer-events-none"
            style={{
              boxShadow:
                "0px 0.522px 1.567px 0px rgba(11, 19, 36, 0.07), 0px -0.522px 0px 0px rgba(0, 0, 0, 0.12) inset",
            }}
          >
            <div className="flex items-center">
              <div className="flex-1 flex justify-center pl-5">
                <p
                  style={{
                    textShadow: "0px 0.522px 1.045px rgba(0, 0, 0, 0.07)",
                  }}
                  className="text-purple-600 text-[8px] font-medium leading-3"
                >
                  Post
                </p>
              </div>
              <div className="w-[22px] h-[22px] flex items-center justify-center rounded-full border border-solid border-neutral-100">
                <PostArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-flex-col gap-[6px]">
        <div className="flex items-center gap-1 text-[8px] text-grey-500 font-normal">
          <p className="text-text-sub font-semibold">DesignWhiz</p>
          <p>-</p>
          <p className="text-[6px]">A community for designers</p>
        </div>
        <div className="custom-flex-col gap-1 text-grey-500 text-[6px] font-medium">
          <div className="flex flex-wrap gap-1 [&>*]:capitalize">
            <a
              target="_blank"
              className="hover:underline"
              href="https://www.mydesignwhiz.com/about-us"
            >
              about us
            </a>
            <a href="mailto:gaga@mydesignwhiz.com" className="hover:underline">
              contact
            </a>
            <a
              target="_blank"
              className="hover:underline"
              href="https://www.mydesignwhiz.com/terms-of-service"
            >
              terms
            </a>
          </div>
          <p>© 2024 DesignWhiz. All rights reserved.</p>
        </div>
        <div className="flex gap-1">
          <HeroMockupSidebarFooterIcon
            icon="x"
            url="https://x.com/mydesignwhiz"
          />
          <HeroMockupSidebarFooterIcon
            icon="instagram"
            url="https://www.instagram.com/dsgnwhiz"
          />
          <HeroMockupSidebarFooterIcon
            icon="linkedin"
            url="https://www.linkedin.com/company/designwhiz/"
          />
        </div>
      </div>
      <div className="absolute bottom-14 right-0 translate-x-2/4 w-[17px] h-[17px] custom-flex-center rounded-full border border-solid border-neutral-100 bg-white">
        <SidebarDoubleArrow size={10} />
      </div>
    </div>
  );
};

export default HeroMockupSidebar;
