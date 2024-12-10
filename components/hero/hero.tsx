import React from "react";
import { Inter_Tight } from "next/font/google";

// Images
import { LaunchVideoPlayIcon } from "../svg/svg";

// Imports
import clsx from "clsx";
import CTA from "../cta/cta";
import HeroMockup from "./hero-mockup";
import HeroPreview from "./hero-preview";
import { hero_slider_text } from "./data";
import HeroTextSlider from "./hero-text-slider";
import { HeroCloudSeparator } from "./hero-components";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div id="home">
      <div
        className="w-full min-h-screen px-10 custom-flex-col gap-[120px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(128, 47, 209, 0.00) 27.86%, rgba(156, 83, 250, 0.37) 247.43%), #FFF",
        }}
      >
        <div style={{ height: "calc(36px + 60px)" }}></div>
        <div className="custom-flex-col gap-10">
          <div className="flex justify-center">
            <button className="py-[6px] pl-2 pr-3 rounded-full gradient-cta">
              <div className="flex items-center gap-1">
                <div className="w-7 h-7 rounded-full custom-flex-center bg-purple-0">
                  <LaunchVideoPlayIcon />
                </div>
                <p className="gradient-cta-text">See the launch video</p>
              </div>
            </button>
          </div>
          <div className="custom-flex-col gap-8">
            <div className="custom-flex-col gap-6">
              <h1
                className={clsx(
                  inter_tight.className,
                  "text-[rgba(0,0,0,0.90)] text-[60px] font-medium text-center leading-[60px] -tracking-[0.5px]"
                )}
              >
                Welcome to a world built
                <br />
                by designers, for designers
              </h1>
              <div className="flex justify-center">
                <div className="flex items-end gap-1 py-1">
                  <p className="text-[rgba(0,0,0,0.8)] text-lg font-medium leading-[22px] -tracking-[0.18px]">
                    DesignWhiz is a creative sanctuary for
                  </p>
                  <HeroTextSlider text={hero_slider_text} />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-[14px]">
              <CTA type="black" className="w-[192px] h-10">
                explore designwhiz
              </CTA>
              <CTA type="purple" className="w-[192px] h-10">
                create an account
              </CTA>
            </div>
          </div>
        </div>
        <HeroPreview />
      </div>
      <HeroCloudSeparator />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="custom-flex-col gap-[56px]">
          <h1
            className={clsx(
              inter_tight.className,
              "text-[rgba(0,0,0,0.90)] text-[56px] font-medium text-center leading-[56px] -tracking-[0.5px]"
            )}
          >
            All the resources you can find
            <br />
            to be a better designer
          </h1>
          <HeroMockup />
        </div>
      </div>
    </div>
  );
};

export default Hero;
