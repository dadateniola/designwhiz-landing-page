import React from "react";
import { Inter_Tight } from "next/font/google";

// Imports
import clsx from "clsx";
import { benefits_data } from "./data";
import BenefitsCard from "./benefits-card";
import { SectionLabel } from "../global-components";
import { section_heading_text_styles } from "@/app/config";
import { BenefitsArcSeparator } from "./benefits-components";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const Benefits = () => {
  return (
    <section id="benefits">
      <BenefitsArcSeparator />
      <div
        className={clsx(
          "custom-flex-col gap-10 sm:gap-20 md:gap-[120px]",
          "pt-10 sm:pt-8 md:pt-0 pb-[110px] sm:pb-[200px]",
          "px-4 xs:px-8 lg:px-20 xl:px-[116px]"
        )}
      >
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
          <p className="text-text-sub text-sm sm:text-base lg:text-lg font-normal text-center">
            Not just another Dribbble or Behance. You
            <br />
            deserve much more!
          </p>
        </div>
        <div className="custom-flex-col gap-16 md:gap-20">
          {benefits_data.map((benefit, idx) => (
            <BenefitsCard key={idx} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
