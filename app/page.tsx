"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

// Types
import type { SmoothScrollRef } from "@/components/smooth scroll/types";

// Imports
// ------ Main ------
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Benefits from "@/components/benefits/benefits";
import Features from "@/components/features/features";
import Testimonials from "@/components/testimonials/testimonials";
// ------ Others ------
import gsap from "gsap";
import { black_hole_media_query } from "./config";
import HeroBlackHole from "@/components/hero/hero-black-hole";
import LaunchVideo from "@/components/launch video/launch-video";
import SmoothScroll from "@/components/smooth scroll/smooth-scroll";
import { LandingPageContext } from "@/components/landing-page-context";

const LandingPage = () => {
  // States
  const [showLaunchVideo, setShowLaunchVideo] = useState<boolean>(false);

  // Refs
  const smoothScrollRef = useRef<SmoothScrollRef>(null);

  // Functions
  const scrollTo = (position: number) => {
    smoothScrollRef.current?.scrollTo(position);
    window.scrollTo(0, position);
  };
  const enableScroll = () => {
    document.body.style.overflowY = "auto";
    smoothScrollRef.current?.enableScroll();
  };
  const disableScroll = () => {
    document.body.style.overflowY = "hidden";
    smoothScrollRef.current?.disableScroll();
  };

  const openLaunchVideo = () => setShowLaunchVideo(true);
  const closeLaunchVideo = () => {
    const timeline = gsap.timeline();

    timeline
      .to("[data-launch-video]", {
        scale: 0.95,
        autoAlpha: 0,
        ease: "expo.out",
      })
      .call(() => {
        enableScroll();
        setShowLaunchVideo(false);
      });
  };

  const handleScroll = useCallback(() => {
    if (window.matchMedia(black_hole_media_query).matches) {
      const buffer = 10;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - buffer) {
        scrollTo(buffer);
      }

      if (scrollTop === 0) {
        scrollTo(scrollHeight - clientHeight - buffer * 2);
      }
    }
  }, []);

  // Effects
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const minOffset = window.innerHeight * 2 + 20;
    const homeTop =
      document.querySelector("section#home")?.getBoundingClientRect().top ?? 0;
    const offset = Math.max(minOffset, homeTop);

    scrollTo(offset);

    document
      .querySelectorAll("section:not(#home),section#home > *:not(:first-child)")
      .forEach((elem) => {
        (elem as HTMLElement).style.opacity = "1";
      });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [handleScroll]);

  return (
    <LandingPageContext.Provider
      value={{
        enableScroll,
        disableScroll,
        openLaunchVideo,
        closeLaunchVideo,
      }}
    >
      <SmoothScroll ref={smoothScrollRef}>
        {showLaunchVideo && <LaunchVideo className="z-10" />}
        <Navbar className="z-[5]" />
        <HeroBlackHole className="z-[4]" />
        <main className="relative z-[3] w-dvw overflow-x-hidden">
          <Hero />
          <Benefits />
          <Testimonials />
          <Features />
        </main>
        <Footer className="z-[2]" />
        <div data-dots-bg className="fixed z-[1] inset-0 w-full h-full"></div>
      </SmoothScroll>
    </LandingPageContext.Provider>
  );
};

export default LandingPage;
