// Types
import type { FeaturesCardData } from "./types";

// Imports
import {
  FeedFeatures,
  JobsFeatures,
  FramesFeatures,
  ImportFeatures,
  StreaksFeatures,
  CrossPostFeatures,
  ResourcesFeatures,
} from "./features-components";

export const features_data: FeaturesCardData[] = [
  {
    title: "Feeds, so you always know what's trending",
    desc: "Discover fresh inspiration, share your latest designs, and connect with like-minded designers in a vibrant, ever-growing creative community.",
    preview: <FeedFeatures />,
  },
  {
    title: "Show the world your skill with Frames",
    desc: "Give your talent and design a place to shine with Frames on DesignWhiz. Now you can post your creative work at any stage and have other designers appreciate your craft.",
    preview: <FramesFeatures />,
  },
  {
    title: "All the resources you need, in one place",
    desc: "From design tips to tools and assets, find resources to help you improve your skill and grow your career.",
    preview: <ResourcesFeatures />,
  },
  {
    title: "Freedom to import designs from anywhere",
    desc: "Import your designs from anywhere without boundaries, or limits. Upload and showcase your best work in minutes.",
    preview: <ImportFeatures />,
  },
  {
    title: "Same post, different platforms",
    desc: "Save time and increase your reach by publishing your designs across multiple platforms in just one click with cross posting on DesignWhiz.",
    preview: <CrossPostFeatures />,
  },
  {
    title: "Find your next design gig",
    desc: "Explore handpicked design opportunities selected based on your skill and experience - from internships to senior design roles.",
    preview: <JobsFeatures />,
  },
  {
    title: "Stay consistent with streaks",
    desc: "Track your progress, unlock rewards, and build a creative habit that keeps you inspired and motivated.",
    preview: <StreaksFeatures />,
  },
];
