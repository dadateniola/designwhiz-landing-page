import Image from "next/image";
import { CSSProperties } from "react";

// Types
import type {
  HeroGradientProps,
  HeroMockupIconsProps,
  HeroPreviewImageProps,
  LaunchVideoButtonProps,
  HeroMockupNavButtonProps,
  HeroMockupSidebarButtonProps,
  HeroMockupSidebarFooterIconProps,
} from "./types";

// Imports
import {
  XIcon,
  ProIcon,
  FeedIcon,
  JobsIcon,
  FramesIcon,
  SearchIcon,
  ConnectIcon,
  LinkedinIcon,
  BookmarksIcon,
  InstagramIcon,
  ResourcesIcon,
  NotificationsIcon,
  LaunchVideoPlayIcon,
} from "../svg/svg";

import clsx from "clsx";
import Loader from "../loader/laoder";
import { hero_mockup_nav_actions } from "./data";

export const LaunchVideoButton: React.FC<LaunchVideoButtonProps> = ({
  onClick,
}) => (
  <button
    onClick={onClick}
    className="py-[6px] pl-2 pr-3 rounded-full gradient-cta"
  >
    <div className="flex items-center gap-1">
      <div className="w-7 h-7 rounded-full custom-flex-center bg-purple-0">
        <LaunchVideoPlayIcon />
      </div>
      <p className="gradient-cta-text">See the launch video</p>
    </div>
  </button>
);

export const HeroCloudSeparator = () => (
  <div className="relative w-full h-0">
    <div
      className="absolute w-full h-[80px] sm:h-[150px] lg:h-[240px] top-0 left-0 -translate-y-[60%]"
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
      "hero-mockup-nav-action-shadow flex items-center gap-1 sm:gap-2 md:gap-3 rounded-full",
      "py-[6px] sm:py-3 px-2 sm:px-4",
      "[&>svg]:w-3 sm:[&>svg]:w-4 md:[&>svg]:w-auto [&>svg]:h-3 sm:[&>svg]:h-4 md:[&>svg]:h-auto",
      {
        active,
        "text-text-sub": !active,
        "text-purple-base": active,
      }
    )}
  >
    <HeroMockupIcons action={action} />
    <p
      className={clsx(
        "font-medium leading-5 capitalize",
        "text-[10px] sm:text-[12px] md:text-sm"
      )}
    >
      {action}
    </p>
  </button>
);

export const HeroMockupSidebarButton: React.FC<
  HeroMockupSidebarButtonProps
> = ({ active, action, onClick }) => {
  const isNavAction = action in hero_mockup_nav_actions;
  const class_styles = clsx(
    "py-1 sm:py-[6px] flex items-center gap-[6px] group",
    "[&>svg]:w-[8px] [&>svg]:h-[8px] sm:[&>svg]:w-auto sm:[&>svg]:h-auto",
    {
      "text-text-sub": !active,
      "text-purple-base": active,
      "pointer-events-none": !isNavAction,
    }
  );
  const content = (
    <>
      <HeroMockupIcons size={10} action={action} />
      <p
        className={clsx("text-[6px] md:text-[8px] leading-3 capitalize", {
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

export const HeroMockupPreviewLoader: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div className={clsx("absolute inset-0 w-full h-full", className)}>
    <Loader />
  </div>
);

export const HeroMockupPreviewError: React.FC<{
  type?: "image" | "video";
  className?: string;
}> = ({ type = "image", className }) => (
  <div
    className={clsx(
      "absolute inset-0 w-full h-full flex items-center justify-center",
      className
    )}
  >
    <p className="text-text-sub text-sm font-medium text-center">
      Failed to load {type} 😔
    </p>
  </div>
);

export const HeroPreviewImage: React.FC<HeroPreviewImageProps> = ({
  src,
  alt,
  style,
  states,
  className,
  containerClassName,

  onLoad,
  onError,
}) => {
  const { error, loaded } = states;

  return (
    <div data-hero-preview className={clsx("relative bg-neutral-50", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        width={1500}
        style={style}
        onLoad={onLoad}
        onError={onError}
        className={clsx(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
      {!loaded && !error && (
        <HeroMockupPreviewLoader className="bg-neutral-50" />
      )}
      {error && <HeroMockupPreviewError className="bg-neutral-50" />}
    </div>
  );
};

export const HeroGradient: React.FC<HeroGradientProps> = ({
  style,
  className,
  ...props
}) => (
  <div
    className={clsx("absolute inset-0 w-full h-full", className)}
    style={{
      background:
        "linear-gradient(180deg, rgba(128, 47, 209, 0.00) 27.86%, rgba(156, 83, 250, 0.37) 247.43%), #FFF",
      ...style,
    }}
    {...props}
  ></div>
);
