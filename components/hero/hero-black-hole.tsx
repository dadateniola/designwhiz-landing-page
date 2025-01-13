"use client";

import Image from "next/image";
import React, { useRef } from "react";

// Types
import type { HeroBlackHoleProps } from "./types";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  black_hole,
  black_space_class,
  black_hole_media_query,
} from "@/app/config";

const HeroBlackHole: React.FC<HeroBlackHoleProps> = ({ className }) => {
  // Refs
  const blackHole = useRef<HTMLDivElement>(null);
  const blackHoleTrigger = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(black_hole_media_query, () => {
      ScrollTrigger.create({
        trigger: blackHoleTrigger.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.fromTo(
          blackHole.current,
          {
            scaleY: 2,
          },
          {
            scaleY: 0,
          }
        ),
      });
    });
  });

  return (
    <section className={clsx("relative hidden navbar:block", className)}>
      <div className={black_space_class}></div>
      <div ref={blackHoleTrigger} className="w-full h-screen">
        <div className="sticky top-[-5px] left-0 w-full h-0">
          <div
            ref={blackHole}
            className="absolute left-0 top-0 w-full h-screen origin-top"
            style={{
              transform: "scaleY(0)",
            }}
          >
            <Image
              src={black_hole}
              alt="black hole"
              fill
              className="scale-y-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlackHole;
