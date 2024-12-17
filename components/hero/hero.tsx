"use client";

import React from "react";
import { Inter_Tight } from "next/font/google";

// Imports
import clsx from "clsx";
import CTA from "../cta/cta";
import HeroMockup from "./hero-mockup";
import HeroPreview from "./hero-preview";
import { hero_slider_text } from "./data";
import HeroTextSlider from "./hero-text-slider";
import { useLandingPageContext } from "../landing-page-context";
import { HeroCloudSeparator, LaunchVideoButton } from "./hero-components";
import { benefits_arc_height, section_heading_text_styles } from "@/app/config";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const Hero = () => {
  const { openLaunchVideo } = useLandingPageContext();

  return (
    <section id="home">
      <div
        className="w-full min-h-[95vh] px-5 sm:px-10 custom-flex-col gap-[120px] justify-between overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(128, 47, 209, 0.00) 27.86%, rgba(156, 83, 250, 0.37) 247.43%), #FFF",
        }}
      >
        <div style={{ height: "calc(36px + 60px)" }}></div>
        <div className="custom-flex-col gap-10">
          <div className="flex justify-center">
            <LaunchVideoButton onClick={openLaunchVideo} />
          </div>
          <div className="custom-flex-col gap-8">
            <div className="custom-flex-col gap-6">
              <h1
                className={clsx(
                  inter_tight.className,
                  "text-[rgba(0,0,0,0.90)] font-medium text-center -tracking-[0.5px]",
                  "text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]",
                  "leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px]"
                )}
              >
                Welcome to a world built
                <br />
                by designers, for designers
              </h1>
              <div className="hidden sm:flex justify-center">
                <div className="flex items-end gap-1 py-1">
                  <p className="text-[rgba(0,0,0,0.8)] text-base md:text-lg font-medium leading-[19px] md:leading-[22px] -tracking-[0.18px]">
                    DesignWhiz is a creative sanctuary for
                  </p>
                  <HeroTextSlider text={hero_slider_text} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center sm:flex-row justify-center gap-[14px]">
              <CTA type="dark" className="w-[280px] sm:w-[192px] h-10">
                explore designwhiz
              </CTA>
              <CTA type="purple" className="w-[280px] sm:w-[192px] h-10">
                create an account
              </CTA>
            </div>
          </div>
        </div>
        <HeroPreview />
      </div>
      <HeroCloudSeparator />
      <div className="relative overflow-hidden">
        <div className="absolute z-[1] top-2/4 left-0 w-full h-full">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #F1EDFC 45.53%, rgba(255, 255, 255, 0.00) 117.68%)",
            }}
          ></div>
        </div>
        <div className="relative z-[2] w-full min-h-screen custom-flex-col gap-[100px] sm:gap-[224px] justify-between">
          <div></div>
          <div className="flex justify-center">
            <div className="custom-flex-col gap-10 md:gap-[56px]">
              <h1
                className={clsx(
                  inter_tight.className,
                  "text-[rgba(0,0,0,0.90)]",
                  section_heading_text_styles
                )}
              >
                All the resources you can find
                <br />
                to be a better designer
              </h1>
              <HeroMockup />
            </div>
          </div>
          <div className={benefits_arc_height}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
