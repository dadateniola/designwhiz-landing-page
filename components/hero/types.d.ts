// Imports
import { hero_mockup_nav_actions } from "./data";

export interface HeroTextSliderProps {
  text: string[];
}

export type HeroMockupNavAction = keyof typeof hero_mockup_nav_actions;

export interface HeroMockupNavButtonProps {
  active?: boolean;
  action: HeroMockupNavAction;
}
