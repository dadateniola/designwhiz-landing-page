"use client";

import React, { useRef } from "react";

// Images
import { FeaturesRocket } from "../svg/svg";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FeaturesCard from "./features-card";
import { features_data } from "./features-data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "../global-components";
import { inter_tight, section_heading_text_styles } from "@/app/config";

const Features = () => {
  // Refs
  const featuresCardsTrigger = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: featuresCardsTrigger.current,
            start: "top top",
            end: `+=${window.innerHeight * 5}`,
            scrub: true,
            pin: true,
            // snap: {
            //   snapTo: "labelsDirectional",
            //   duration: { min: 0.2, max: 0.5 },
            // },
            pinSpacing: true,
          },
        });

        const featuresCards: HTMLDivElement[] = gsap.utils.toArray(
          "[data-features-card]"
        );

        timeline
          .set(featuresCards[0], { autoAlpha: 1, pointerEvents: "auto" })
          .addLabel("0", ">");

        featuresCards.forEach((card, idx) => {
          const cardSelector = gsap.utils.selector(card);

          if (idx !== 0) {
            timeline
              .set(card, { autoAlpha: 1, pointerEvents: "auto" })
              .fromTo(
                cardSelector("[data-features-card-text]"),
                {
                  clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                },
                { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
              )
              .from(
                cardSelector("[data-features-card-preview] img"),
                {
                  x: "-70vw",
                  stagger: 0.05,
                  ease: "expo.out",
                },
                "<"
              )
              .addLabel(`${idx}`, ">");
          }

          if (idx !== featuresCards.length - 1) {
            timeline
              .fromTo(
                cardSelector("[data-features-card-text]"),
                { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
                {
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                },
                "+=0.5"
              )
              .to(
                cardSelector("[data-features-card-preview] img"),
                {
                  x: "-70vw",
                  stagger: 0.05,
                },
                "<"
              )
              .set(card, { autoAlpha: 0, pointerEvents: "none" });
          }
        });
      });
    },
    { scope: featuresCardsTrigger }
  );

  return (
    <section id="features">
      <div className="py-[120px] sm:py-[200px] custom-flex-col gap-20 md:gap-[120px]">
        <div className="flex flex-col items-center gap-4 px-[60px]">
          <SectionLabel>Features</SectionLabel>
          <h1
            className={clsx(
              inter_tight.className,
              "text-text-black xs:max-w-[min(670px,70vw)]",
              section_heading_text_styles
            )}
          >
            Built to put your growth and career first
          </h1>
          <p className="text-text-sub text-sm sm:text-base lg::text-lg font-normal text-center xs:max-w-[min(435px,55vw)]">
            DesignWhiz was made to be your creative toolkit, with features and
            tools that helps you become badass!
          </p>
          <div className="custom-flex-col gap-4">
            <div></div>
            <button
              className="py-2 px-4 rounded-full"
              style={{
                boxShadow:
                  "0px 2px 5px 0px rgba(0, 0, 0, 0.08), 0px 35px 16px 0px rgba(0, 0, 0, 0.01)",
                background:
                  "linear-gradient(165deg, #A02BE4 0%, rgba(0, 0, 0, 0.00) 28%, rgba(0, 0, 0, 0.00) 72%, #4F46E5 100%), #09090B",
              }}
            >
              <div className="flex items-center gap-2">
                <FeaturesRocket />
                <p className="text-white text-base font-normal leading-6 -tracking-[0.48px]">
                  Subscribe now
                </p>
              </div>
            </button>
          </div>
        </div>
        <div
          ref={featuresCardsTrigger}
          className={clsx(
            "relative navbar:h-screen",
            "custom-flex-col gap-20 md:gap-[120px] navbar:gap-0"
          )}
        >
          {features_data.map((feature, idx) => (
            <FeaturesCard key={idx} data={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
