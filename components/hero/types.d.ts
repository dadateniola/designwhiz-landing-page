// Imports
import { hero_mockup_nav_actions, hero_mockup_sidebar_actions } from "./data";

export interface HeroMockupContextProps {
  activeAction: HeroMockupNavAction;
  setActiveAction: React.Dispatch<React.SetStateAction<HeroMockupNavAction>>;
}

export interface HeroTextSliderProps {
  text: string[];
}

export type HeroMockupNavAction = keyof typeof hero_mockup_nav_actions;

export type HeroMockupSidebarAction =
  (typeof hero_mockup_sidebar_actions)[number];

export interface HeroMockupIconsProps {
  size?: number;
  action: HeroMockupSidebarAction;
}

export interface HeroMockupNavButtonProps {
  active?: boolean;
  onClick: () => void;
  action: HeroMockupNavAction;
}

export interface HeroMockupSidebarButtonProps {
  active?: boolean;
  onClick?: () => void;
  action: HeroMockupSidebarAction;
}

export interface HeroMockupSidebarFooterIconProps {
  url: string;
  icon: "x" | "linkedin" | "instagram";
}
