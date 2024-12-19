import { CSSProperties } from "react";

export interface LandingPageContextProps {
  enableScroll: () => void;
  disableScroll: () => void;
  openLaunchVideo: () => void;
  closeLaunchVideo: () => void;
}

export interface SectionLabelProps {
  icon?: boolean;
  style?: CSSProperties;
  customContent?: boolean;
  children: React.ReactNode;
}

export interface PerspectiveGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}
