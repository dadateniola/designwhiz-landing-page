import React from "react";
import { Inter_Tight } from "next/font/google";

// Imports
import clsx from "clsx";
import BenefitsCard from "./benefits-card";
import { SectionLabel } from "../global-components";
import { section_heading_text_styles } from "@/app/config";
import { BenefitsArcSeparator } from "./benefits-components";
import { benefits_data } from "./data";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const Benefits = () => {
  return (
    <div id="benefits">
      <BenefitsArcSeparator />
      <div className="custom-flex-col gap-[120px] px-[116px] pb-[200px]">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel>DesignWhiz For You</SectionLabel>
          <h1
            className={clsx(
              inter_tight.className,
              "text-text-black max-w-[626px]",
              section_heading_text_styles
            )}
          >
            We know you deserve better.
          </h1>
          <p className="text-text-sub text-lg font-normal text-center leading-[26px]">
            Not just another Dribbble or Behance. You
            <br />
            deserve much more!
          </p>
        </div>
        <div className="custom-flex-col gap-20">
          {benefits_data.map((benefit, idx) => (
            <BenefitsCard key={idx} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
