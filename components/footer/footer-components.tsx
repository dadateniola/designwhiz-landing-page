// Types
import type { FooterCircleProps } from "./types";

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
