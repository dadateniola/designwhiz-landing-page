"use client";

import React, { useRef } from "react";

// Types
import type { NavbarProps } from "./types";

// Images
import { DesignWhizLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavbarLinks from "./navbar-links";
import { NavbarCTA } from "./navbar-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  // Constants
  const max_navbar_width = 960;
  const navbar_percentage = 85;

  // Refs
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

  const handleResize = () => {
    const navbar = navbarRef.current;
    const isRetracted = isRetractedRef.current;
    if (navbar && !isRetracted) navbar.style.width = calculateWidth();
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#navbar-trigger",
      start: "top top",
      onEnter: () => {
        gsap.to(navbarRef.current, {
          width: "auto",
          duration: 0.3,
          ease: "power2.out",
        });
        isRetractedRef.current = true;
      },
      onEnterBack: () => {
        gsap.to(navbarRef.current, {
          width: calculateWidth(),
          duration: 0.3,
          ease: "power2.out",
        });
        isRetractedRef.current = false;
      },
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header
      ref={navbarRef}
      style={{
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(0, 0, 0, 0.10)",
        background: "rgba(255, 255, 255, 0.85)",
        width: `min(${max_navbar_width}px, ${navbar_percentage}%)`,
      }}
      className={clsx(
        "fixed top-5 left-2/4 -translate-x-2/4 p-2 pl-4 flex gap-7 justify-between rounded-full",
        className
      )}
    >
      <div className="flex gap-2 items-center">
        <DesignWhizLogo />
        <p className="text-text-black text-base font-medium -tracking-[0.48px] leading-6">
          DesignWhiz
        </p>
      </div>
      <div className="hidden navbar:flex items-center gap-6">
        <NavbarLinks />
        <div className="flex items-center">
          <NavbarCTA>Create account</NavbarCTA>
        </div>
      </div>
      <div className="flex navbar:hidden items-center">
        <NavbarCTA>Sign up</NavbarCTA>
      </div>
    </header>
  );
};

export default Navbar;
