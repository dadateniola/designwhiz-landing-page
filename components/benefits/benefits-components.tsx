// Types
import { BenefitsCardHeaderProps, BenefitsCardListProps } from "./types";

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
        data-benefits-arc
        className="absolute top-0 left-2/4 -translate-x-2/4 w-[106%] h-[300%] bg-white rounded-t-[100%]"
        style={{
          boxShadow: "0px 4px 12px 0px rgba(226, 227, 242, 0.50) inset",
        }}
      ></div>
    </div>
  </div>
);

export const BenefitsCardHeader: React.FC<BenefitsCardHeaderProps> = ({
  heading,
  subheading,
}) => (
  <div className="custom-flex-col gap-3 navbar:gap-1">
    <p
      className={clsx(
        "text-black font-medium leading-[100%]",
        "text-xl lg:text-2xl xl:text-[28px]"
      )}
    >
      {heading}
    </p>
    <p className="text-neutral-200 text-base font-normal">{subheading}</p>
  </div>
);

export const BenefitsCardList: React.FC<BenefitsCardListProps> = ({ list }) => (
  <div className="custom-flex-col gap-5">
    {list.map(({ desc, title }, idx) => (
      <div key={idx} className="flex gap-3">
        <div className="flex items-start w-[18px]">
          <p className="text-text-soft text-sm font-medium">
            {`${idx + 1}`.padStart(2, "0")}
          </p>
        </div>
        <div className="flex-1 custom-flex-col gap-2">
          <p className="text-[#0E0523] text-base font-medium">{title}</p>
          <p className="text-neutral-200 text-sm font-normal">{desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export const BenefitsCardVideoOverlay = () => (
  <div
    className="absolute inset-0 w-full h-full rounded-[14px]"
    style={{
      boxShadow:
        "0px 0px 0px 2px rgba(219, 219, 219, 0.38) inset, 0px 4px 2px 0px rgba(0, 0, 0, 0.06) inset, 0px 0px 24px 4px rgba(0, 0, 0, 0.04) inset",
    }}
  ></div>
);
