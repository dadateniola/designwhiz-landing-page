// Types
import clsx from "clsx";
import type { FooterCircleProps, FooterGradientProps } from "./types";

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
