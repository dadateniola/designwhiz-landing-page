import { StaticImageData } from "next/image";

export interface TestimonialsCardProps {
  name: string;
  desc: string;
  stars: number;
  pfp: StaticImageData | string;
  preview: StaticImageData | string;
}
