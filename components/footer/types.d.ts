import { StaticImageData } from "next/image";

export interface FooterProps {
  className?: string;
}

export interface FooterAvatarProps {
  x: number;
  y: number;
  src: string | StaticImageData;
}

export interface FooterCircleProps {
  x: number;
  y: number;
  size: number;
}

export type FooterGradientProps = React.HTMLAttributes<HTMLDivElement>;
