import { StaticImageData } from "next/image";

export interface TestimonialsData {
  name: string;
  desc: string;
  stars: number;
  pfp: StaticImageData | string;
  preview: StaticImageData | string;
}

export interface TestimonialsCardProps {
  data: TestimonialsData;
  spacing: "up" | "down";
}
