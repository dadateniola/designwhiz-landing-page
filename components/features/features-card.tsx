import React from "react";

// Types
import type { FeaturesCardProps } from "./types";

// Imports
import clsx from "clsx";
import CTA from "../cta/cta";
import { SectionLabel } from "../global-components";

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  data: { desc, title },
}) => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-full flex flex-col navbar:flex-row gap-[64px] navbar:gap-10">
        <div className="flex-1 bg-red-50 min-h-[400px]"></div>
        <div
          className={clsx(
            "w-full navbar:w-[47%] custom-flex-col gap-6",
            "pl-[62px] navbar:pl-0",
            "pr-[18px] navbar:pr-10 lg:pr-[70px] 2xl:pr-[116px]"
          )}
        >
          <div className="custom-flex-col gap-3 navbar:gap-5">
            <div className="hidden navbar:flex">
              <SectionLabel>Features</SectionLabel>
            </div>
            <h2
              className={clsx(
                "text-grey-13 font-medium leading-[100%] -tracking-[1.5px]",
                "text-2xl sm:text-[34px] xl:text-[44px]"
              )}
            >
              {title}
            </h2>
            <p
              className={clsx(
                "text-grey-13 font-normal lg:max-w-[90%]",
                "text-base sm:text-lg xl:text-xl"
              )}
            >
              {desc}
            </p>
          </div>
          <div className="flex">
            <CTA type="dark" className="py-[10px] w-[192px]">
              Explore Designwhiz
            </CTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
