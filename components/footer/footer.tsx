"use client";

import React, { useRef } from "react";

// Types
import type { FooterProps } from "./types";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import CTA from "../cta/cta";
import { useGSAP } from "@gsap/react";
import { footer_avatars } from "./data";
import FooterAvatar from "./footer-avatar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PerspectiveGrid } from "../global-components";
import { FooterGradient } from "./footer-components";

const Footer: React.FC<FooterProps> = ({ className }) => {
  // Refs
  const footerRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top top",
        },
      });

      timeline
        .from("[data-footer-avatar]", {
          autoAlpha: 0,
          stagger: 0.1,
        })
        .fromTo(
          "[data-footer-text]",
          {
            scale: 1.2,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          },
          {
            scale: 1,
            ease: "expo.out",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }
        )
        .from(
          "[data-footer-gradient], [data-footer-grid]",
          {
            autoAlpha: 0,
          },
          "<"
        );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className={clsx("relative h-screen", className)}>
      <FooterGradient data-footer-gradient />
      <PerspectiveGrid data-footer-grid style={{ height: "50vh" }} />
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-[105vw] navbar:w-full h-[70vh] navbar:h-[90vh] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            {footer_avatars.map((avatar, idx) => (
              <FooterAvatar key={idx} {...avatar} />
            ))}
          </div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <div data-footer-text className="custom-flex-col gap-8">
            <h2
              className={clsx(
                "text-[rgba(0,0,0,0.90)] font-medium text-center -tracking-[1.6px]",
                "text-[34px] xs:text-[40px] sm:text-[50px] xl:text-[60px] 2xl:text-[70px]",
                "leading-[34px] xs:leading-[40px] sm:leading-[50px] xl:leading-[60px] 2xl:leading-[70px]"
              )}
            >
              This is a space where
              <br />
              every <span className="text-purple-base italic">
                creative
              </span>{" "}
              misfit
              <br />
              can belong.
            </h2>
            <div className="flex justify-center">
              <CTA
                type="dark"
                className="py-[10px] px-10 2xl:w-[302px]"
                style={{ fontWeight: "normal" }}
              >
                See Designwhiz in action
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
