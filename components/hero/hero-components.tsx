import { CSSProperties } from "react";

// Types
import type {
  HeroMockupIconsProps,
  HeroMockupNavButtonProps,
  HeroMockupSidebarButtonProps,
  HeroMockupSidebarFooterIconProps,
} from "./types";

// Imports
import {
  ProIcon,
  FeedIcon,
  JobsIcon,
  FramesIcon,
  SearchIcon,
  ConnectIcon,
  BookmarksIcon,
  ResourcesIcon,
  NotificationsIcon,
  XIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../svg/svg";

import clsx from "clsx";
import Loader from "../loader/laoder";
import { hero_mockup_nav_actions } from "./data";

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

const HeroMockupIcons: React.FC<HeroMockupIconsProps> = ({ size, action }) => {
  return action === "frames" ? (
    <FramesIcon size={size} />
  ) : action === "feed" ? (
    <FeedIcon size={size} />
  ) : action === "resources" ? (
    <ResourcesIcon size={size} />
  ) : action === "connect" ? (
    <ConnectIcon size={size} />
  ) : action === "jobs" ? (
    <JobsIcon size={size} />
  ) : action === "search" ? (
    <SearchIcon size={size} />
  ) : action === "notifications" ? (
    <NotificationsIcon size={size} />
  ) : action === "bookmarks" ? (
    <BookmarksIcon size={size} />
  ) : action === "pro" ? (
    <ProIcon size={size} />
  ) : null;
};

export const HeroMockupNavButton: React.FC<HeroMockupNavButtonProps> = ({
  action,
  active,
  onClick,
}) => (
  <button
    onClick={onClick}
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
    <HeroMockupIcons action={action} />
    <p className="text-sm font-medium leading-5 capitalize">{action}</p>
  </button>
);

export const HeroMockupSidebarButton: React.FC<
  HeroMockupSidebarButtonProps
> = ({ active, action, onClick }) => {
  const isNavAction = action in hero_mockup_nav_actions;
  const class_styles = clsx("py-[6px] flex items-center gap-[6px] group", {
    "text-text-sub": !active,
    "text-purple-base": active,
    "pointer-events-none": !isNavAction,
  });
  const content = (
    <>
      <HeroMockupIcons size={10} action={action} />
      <p
        className={clsx("text-[8px] leading-3 capitalize", {
          "font-medium": !active,
          "font-semibold": active,
          "group-hover:font-semibold": !active && isNavAction,
        })}
      >
        {action}
      </p>
    </>
  );

  return isNavAction ? (
    <button onClick={onClick} className={class_styles}>
      {content}
    </button>
  ) : (
    <div className={class_styles}>{content}</div>
  );
};

export const HeroMockupSidebarFooterIcon: React.FC<
  HeroMockupSidebarFooterIconProps
> = ({ url, icon }) => (
  <a
    href={url}
    target="_blank"
    className="w-3 h-3 custom-flex-center rounded-full bg-neutral-400"
  >
    {icon === "x" ? (
      <XIcon size={8} />
    ) : icon === "linkedin" ? (
      <LinkedinIcon size={6} />
    ) : icon === "instagram" ? (
      <InstagramIcon size={7} />
    ) : null}
  </a>
);

export const HeroMockupPreviewLoader: React.FC = () => (
  <div className="absolute inset-0 w-full h-full">
    <Loader />
  </div>
);

export const HeroMockupPreviewError: React.FC = () => (
  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
    <p className="text-text-sub text-sm font-medium text-center">
      Failed to load image 😔
    </p>
  </div>
);
