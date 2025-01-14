"use client";

import React, { useRef } from "react";
import { Inter_Tight } from "next/font/google";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import CTA from "../cta/cta";
import { useGSAP } from "@gsap/react";
import HeroMockup from "./hero-mockup";
import HeroPreview from "./hero-preview";
import { hero_slider_text } from "./data";
import HeroTextSlider from "./hero-text-slider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLandingPageContext } from "../landing-page-context";

import {
  HeroGradient,
  LaunchVideoButton,
  HeroCloudSeparator,
} from "./hero-components";

import PerspectiveGrid from "../perspective grid/perspective-grid";
import { benefits_arc_height, section_heading_text_styles } from "@/app/config";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const Hero = () => {
  // Constants
  const hero_preview_aspect_ratio = 1.6;

  // Hooks
  const { openLaunchVideo } = useLandingPageContext();

  // Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Functions
  const getHeight = (width: number) => width / hero_preview_aspect_ratio;

  // Animation
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px)", () => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "bottom bottom",
        end: `+=${getHeight((window.innerWidth / 5) * 2)}`,
        pin: true,
        pinSpacing: false,
      });

      ScrollTrigger.create({
        trigger: previewRef.current,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    const timeline = gsap.timeline();

    timeline
      .set(heroRef.current, { autoAlpha: 1 })
      .fromTo(
        "[data-hero-text]",
        {
          scale: 1.2,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        {
          delay: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }
      )
      .call(() => {
        const navbar = document.querySelector("header");
        if (navbar) navbar.classList.remove("navbar-hidden");
      })
      .from("[data-hero-preview]", {
        yPercent: 100,
        ease: "power2.out",
      })
      .from(
        "[data-hero-gradient], [data-hero-grid]",
        {
          autoAlpha: 0,
        },
        "<"
      );
  });

  return (
    <section id="home">
      <div
        data-hero
        ref={heroRef}
        className={clsx(
          "relative w-full px-5 sm:px-10 overflow-hidden",
          "opacity-0 invisible" // Hidden by default for animation
        )}
      >
        <HeroGradient data-hero-gradient />
        <PerspectiveGrid data-hero-grid />
        <div className="relative min-h-[95vh] custom-flex-col gap-[120px] justify-between">
          <div style={{ height: "calc(36px + 60px)" }}></div>
          <div data-hero-text className="custom-flex-col gap-10 pb-1">
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
              <div className="hidden navbar:flex flex-col items-center sm:flex-row justify-center gap-[14px]">
                <CTA type="dark" className="w-[280px] sm:w-[192px] h-10">
                  explore designwhiz
                </CTA>
                <CTA type="purple" className="w-[280px] sm:w-[192px] h-10">
                  create an account
                </CTA>
              </div>
              <div className="flex justify-center navbar:hidden">
                <CTA
                  normalCase
                  type="purple"
                  className="w-[min(95%,280px)] h-10"
                >
                  Become a part of DesignWhiz
                </CTA>
              </div>
            </div>
          </div>
          <HeroPreview />
        </div>
      </div>
      <HeroCloudSeparator />
      <div ref={previewRef} className="relative overflow-hidden bg-white">
        <div
          data-dots-bg
          className="absolute z-[1] inset-0 w-full h-full"
        ></div>
        <div className="absolute z-[2] top-2/4 left-0 w-full h-full">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #F1EDFC 45.53%, rgba(255, 255, 255, 0.00) 117.68%)",
            }}
          ></div>
        </div>
        <div className="relative z-[3] w-full min-h-screen custom-flex-col gap-[100px] sm:gap-[224px] justify-between">
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
