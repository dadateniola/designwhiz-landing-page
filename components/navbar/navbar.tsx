"use client";

import React, { useEffect, useRef } from "react";

// Types
import type { NavbarProps } from "./types";

// Images
import { DesignWhizLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import NavbarLinks from "./navbar-links";
import { NavbarCTA } from "./navbar-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  // Constants
  const threshold = 200;
  const max_navbar_width = 960;
  const navbar_percentage = 85;

  // Refs
  const lastScrollRef = useRef(0);
  const scrollDeltaRef = useRef(0);
  const startValueRef = useRef(0);
  const isRetractedRef = useRef(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Functions
  const calculateWidth = () => {
    const viewportWidth = window.innerWidth;
    const percentageWidth = viewportWidth * (navbar_percentage / 100);
    return percentageWidth > max_navbar_width
      ? `${max_navbar_width}px`
      : `${navbar_percentage}%`;
  };

  const animateNavbarWidth = (width: string) => {
    const navbar = navbarRef.current;

    if (navbar) {
      const timeline = gsap.timeline();

      timeline
        .call(() => {
          navbar.style.transitionDuration = "0s";
        })
        .to(navbar, {
          width,
          duration: 0.3,
          ease: "power2.out",
        })
        .call(() => {
          navbar.style.transitionDuration = "500ms";
        });
    }
  };

  const handleResize = () => {
    const navbar = navbarRef.current;
    const isRetracted = isRetractedRef.current;
    if (navbar && !isRetracted) navbar.style.width = calculateWidth();
  };
  const handleScroll = () => {
    const navbar = navbarRef.current;

    // I know, I also dont understand whatever is happening here 😅
    // But it works 😉
    if (navbar && isRetractedRef.current) {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      // Ignore calculations before the start value
      if (currentScroll < startValueRef.current) {
        lastScrollRef.current = currentScroll; // Keep updating lastScrollRef
        return;
      }

      // Adjust calculations to start from the start value
      const adjustedScroll = currentScroll - startValueRef.current;
      const adjustedLastScroll = lastScrollRef.current - startValueRef.current;

      if (adjustedScroll > adjustedLastScroll) {
        scrollDeltaRef.current += adjustedScroll - adjustedLastScroll;
        if (scrollDeltaRef.current > threshold) {
          navbar.classList.add("navbar-hidden");
          scrollDeltaRef.current = 0;
        }
      } else {
        scrollDeltaRef.current += adjustedLastScroll - adjustedScroll;
        if (scrollDeltaRef.current > threshold) {
          navbar.classList.remove("navbar-hidden");
          scrollDeltaRef.current = 0;
        }
      }

      lastScrollRef.current = currentScroll <= 0 ? 0 : currentScroll;
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#navbar-trigger",
      start: "top center",
      onEnter: () => {
        animateNavbarWidth("auto");

        startValueRef.current =
          (window.scrollY || document.documentElement.scrollTop) +
          window.innerHeight / 2;
        isRetractedRef.current = true;
      },
      onLeaveBack: () => {
        animateNavbarWidth(calculateWidth());
        isRetractedRef.current = false;
      },
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const navbar = navbarRef.current;

    if (navbar) navbar.style.width = calculateWidth();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      style={{
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(0, 0, 0, 0.10)",
        background: "rgba(255, 255, 255, 0.85)",
      }}
      className={clsx(
        "navbar-hidden",
        "p-2 pl-4 flex gap-7 justify-between rounded-full overflow-hidden",
        className
      )}
    >
      <Link href="" className="flex gap-2 items-center">
        <DesignWhizLogo />
        <p className="text-text-black text-base font-medium -tracking-[0.48px] leading-6">
          DesignWhiz
        </p>
      </Link>
      <div className="hidden navbar:flex items-center gap-6">
        <NavbarLinks />
        <div className="flex items-center">
          <NavbarCTA>Get started</NavbarCTA>
        </div>
      </div>
      <div className="flex navbar:hidden items-center">
        <NavbarCTA>Get started</NavbarCTA>
      </div>
    </header>
  );
};

export default Navbar;
