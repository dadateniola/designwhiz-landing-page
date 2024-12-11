// Imports
import clsx from "clsx";
import { benefits_arc_height } from "@/app/config";

export const BenefitsArcSeparator = () => (
  <div className="relative z-10 w-full h-0">
    <div
      className={clsx(
        "absolute bottom-0 left-0 w-full overflow-hidden",
        benefits_arc_height
      )}
    >
      <div
        className="absolute top-0 left-2/4 -translate-x-2/4 w-[106%] h-[300%] bg-white rounded-t-[100%]"
        style={{
          boxShadow: "0px 4px 12px 0px rgba(226, 227, 242, 0.50) inset",
        }}
      ></div>
    </div>
  </div>
);
