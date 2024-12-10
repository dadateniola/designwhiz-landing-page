import { CSSProperties } from "react";

// Types
import type { HeroMockupNavButtonProps } from "./types";

// Imports
import {
  FeedIcon,
  JobsIcon,
  FramesIcon,
  ConnectIcon,
  ResourcesIcon,
} from "../svg/svg";

import { hero_mockup_nav_actions } from "./data";
import clsx from "clsx";

export const HeroCloudSeparator = () => (
  <div className="relative w-full h-0">
    <div
      className="absolute w-full h-[240px] top-0 left-0 -translate-y-[60%]"
      style={{
        background:
          "linear-gradient(179deg, rgba(255, 255, 255, 0.00) 11.93%, #FFF 52.61%)",
      }}
    ></div>
  </div>
);

export const HeroMockupNavButton: React.FC<HeroMockupNavButtonProps> = ({
  action,
  active,
}) => (
  <button
    style={
      {
        "--color": active ? "#6423ec" : hero_mockup_nav_actions[action],
      } as CSSProperties
    }
    className={clsx(
      "hero-mockup-nav-action-shadow py-3 px-4 flex items-center gap-3 rounded-full",
      {
        active,
        "text-text-sub": !active,
        "text-purple-base": active,
      }
    )}
  >
    {action === "frames" ? (
      <FramesIcon />
    ) : action === "feed" ? (
      <FeedIcon />
    ) : action === "resources" ? (
      <ResourcesIcon />
    ) : action === "connect" ? (
      <ConnectIcon />
    ) : action === "jobs" ? (
      <JobsIcon />
    ) : null}
    <p className="text-sm font-medium leading-5 capitalize">{action}</p>
  </button>
);
