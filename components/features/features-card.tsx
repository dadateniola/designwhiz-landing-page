import React from "react";

// Types
import type { FeaturesCardProps } from "./types";

// Imports
import clsx from "clsx";
import { SectionLabel } from "../global-components";
import { FeaturesCardCTA } from "./features-components";

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  data: { desc, title, preview },
}) => {
  return (
    <div
      data-features-card
      className={clsx(
        "navbar:absolute w-full navbar:h-screen flex items-center",
        "navbar:opacity-0 navbar:invisible navbar:pointer-events-none"
      )}
    >
      <div className="w-full flex flex-col navbar:flex-row gap-[64px] navbar:gap-10">
        <div className="w-full navbar:w-[53%] navbar:grid justify-end">
          <div
            data-features-card-preview
            className="w-full navbar:w-[70vw] 2xl:w-[60vw] px-6 navbar:px-0"
          >
            {preview}
          </div>
        </div>
        <div
          className={clsx(
            "w-full navbar:w-[47%]",
            "pl-[62px] navbar:pl-0",
            "pr-[18px] navbar:pr-10 lg:pr-[70px] 2xl:pr-[116px]"
          )}
        >
          <div data-features-card-text className="custom-flex-col gap-6">
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
            {/* PC CTA */}
            <div className="hidden navbar:flex pl-1 pb-1">
              <FeaturesCardCTA href="https://www.mydesignwhiz.com/frames">
                Explore Designwhiz
              </FeaturesCardCTA>
            </div>
            {/* Mobile CTA */}
            <div className="flex navbar:hidden pl-1 pb-1">
              <FeaturesCardCTA>Join Designwhiz</FeaturesCardCTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
