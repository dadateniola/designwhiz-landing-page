import { Inter_Tight } from "next/font/google";

// Images
import BlankImage from "@/public/images/empty.svg";
import BlackHole from "@/public/images/black-hole.png";

export const empty = BlankImage;
export const black_hole = BlackHole;

export const section_heading_text_styles = [
  "font-medium text-center -tracking-[0.5px]",
  "text-[26px] sm:text-[36px] md:text-[46px] lg:text-[56px]",
  "leading-[26px] sm:leading-[36px] md:leading-[46px] lg:leading-[56px]",
].join(" ");

export const benefits_arc_height = "h-[80px] md:h-[120px] xl:h-[190px]";

export const inter_tight = Inter_Tight({ subsets: ["latin"] });

export const black_space_class = "w-full h-[calc(100vh+20px)] bg-black";

export const black_hole_media_query = "(min-width: 900px)";

export const perspectiveGridLineColor = (opacity: number) =>
  `rgba(146, 99, 168, ${opacity})`;
