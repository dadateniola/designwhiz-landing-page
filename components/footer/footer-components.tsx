import Image from "next/image";

// Types
import type {
  FooterCTAProps,
  FooterCircleProps,
  FooterGradientProps,
  FooterBlackHoleProps,
} from "./types";

// Imports
import clsx from "clsx";
import CTA from "../cta/cta";
import { black_hole } from "@/app/config";

export const FooterCircle: React.FC<FooterCircleProps> = ({ x, y, size }) => (
  <div
    className="absolute bg-[#EBE2F8] rounded-full"
    style={{
      top: `${y}%`,
      left: `${x}%`,
      width: `${size}px`,
      height: `${size}px`,
      transform: "translate(-50%, -50%)",
    }}
  ></div>
);

export const FooterGradient: React.FC<FooterGradientProps> = ({
  style,
  className,
  ...props
}) => (
  <div
    className={clsx("absolute inset-0 w-full h-full", className)}
    style={{
      background:
        "linear-gradient(180deg, rgba(128, 47, 209, 0.00) 21.88%, rgba(156, 83, 250, 0.37) 239.02%), #FAF9FF",
      ...style,
    }}
    {...props}
  ></div>
);

export const FooterCTA: React.FC<FooterCTAProps> = ({ href, children }) => (
  <CTA
    type="dark"
    href={href}
    normalCase
    style={{ fontWeight: "normal" }}
    className="py-[10px] px-10 2xl:w-[302px]"
  >
    {children}
  </CTA>
);

export const FooterBlackHole: React.FC<FooterBlackHoleProps> = ({
  className,
  ...props
}) => (
  <div className="relative w-full h-0">
    <div
      className={clsx(
        "absolute left-0 bottom-[-5px] w-full origin-bottom",
        className
      )}
      {...props}
    >
      <Image src={black_hole} alt="black hole" fill />
    </div>
  </div>
);
