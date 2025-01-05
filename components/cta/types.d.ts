import { CSSProperties } from "react";

// Imports
import { cta_button_types } from "./data";

export type CTAType = keyof typeof cta_button_types;

export interface CTAProps {
  href?: string;
  type: CTAType;
  className?: string;
  onClick?: () => void;
  normalCase?: boolean;
  style?: CSSProperties;
  children: React.ReactNode;
}
