// Types
import type { HeroMockupNavAction } from "./types";

// Images
import { empty } from "@/app/config";
import Feed from "@/public/images/hero/mockup/feed.png";
import Jobs from "@/public/images/hero/mockup/jobs.png";
import Frames from "@/public/images/hero/mockup/frames.png";
import Connect from "@/public/images/hero/mockup/connect.png";
import Resources from "@/public/images/hero/mockup/resources.png";

export const hero_slider_text = [
  "Digital Artists",
  "Illustrators",
  "Icon Designers",
  "3D Artists",
  "Type Designers",
  "UI/UX Designers",
  "Visual Artists",
  "Everyone",
  "Digital Artists",
];

export const hero_mockup_sidebar_actions = [
  "frames",
  "feed",
  "resources",
  "connect",
  "jobs",
  "search",
  "notifications",
  "bookmarks",
  "pro",
] as const;

export const hero_mockup_nav_actions = {
  frames: "#6423EC",
  feed: "#EC2378",
  resources: "#238CEC",
  connect: "#23ECEC",
  jobs: "#A0EC23",
} as const;

export const getHeroMockupImage = (action: HeroMockupNavAction) => {
  switch (action) {
    case "frames":
      return Frames;
    case "feed":
      return Feed;
    case "resources":
      return Resources;
    case "connect":
      return Connect;
    case "jobs":
      return Jobs;
    default:
      return empty;
  }
};
