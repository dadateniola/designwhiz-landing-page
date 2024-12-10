import { CSSProperties } from "react";

export interface LoaderProps {
  dots?: number;
  size?: number;
  color?: string;
  scale?: number;
  gap?: number;
  stagger?: number;
  className?: string;
  style?: CSSProperties;
}
