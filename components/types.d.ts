import { CSSProperties } from "react";

export interface SectionLabelProps {
  icon?: boolean;
  style?: CSSProperties;
  customContent?: boolean;
  children: React.ReactNode;
}
