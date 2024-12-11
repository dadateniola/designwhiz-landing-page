import { CSSProperties } from "react";

export interface PictureProps {
  src: string | StaticImageData;
  alt?: string;

  size?: number;
  width?: number;
  height?: number;

  className?: string;
  style?: CSSProperties;
  resolutionMultiplier?: number;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}
