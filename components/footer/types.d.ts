import { StaticImageData } from "next/image";

export interface FooterProps {
  className?: string;
}

export interface FooterAvatarProps {
  x: number;
  y: number;
  src: string | StaticImageData;
}
