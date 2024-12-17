import { CSSProperties } from "react";

export interface TooltipProps {
  text: string;
  className?: string;
  normal_case?: boolean;
  style?: CSSProperties;
  children: React.ReactNode;
  position?: "top" | "left" | "bottom" | "right";
  classPosition?: "relative" | "absolute" | "fixed" | "sticky";
}
