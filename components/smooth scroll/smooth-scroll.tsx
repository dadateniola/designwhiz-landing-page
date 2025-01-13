"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Types
import type { SmoothScrollProps, SmoothScrollRef } from "./types";

// Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, LenisRef } from "lenis/react";

const SmoothScroll = forwardRef<SmoothScrollRef, SmoothScrollProps>(
  ({ children }, ref) => {
    const lenisRef = useRef<LenisRef>(null);

    // Hooks
    useImperativeHandle(ref, () => ({
      scrollTo: (position) =>
        lenisRef.current?.lenis?.scrollTo(position, {
          immediate: true,
        }),
      enableScroll: () => lenisRef.current?.lenis?.start(),
      disableScroll: () => lenisRef.current?.lenis?.stop(),
    }));

    // Effects
    useEffect(() => {
      // Ensure Lenis only initializes on the client
      if (typeof window === "undefined" || !lenisRef.current?.lenis) return;

      const lenis = lenisRef.current.lenis;

      // Attach scroll events and sync with ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove((time) => lenis.raf(time * 1000));
        lenis.off("scroll", ScrollTrigger.update);
      };
    }, []);

    return (
      <ReactLenis root ref={lenisRef} options={{ lerp: 0.5 }}>
        {children}
      </ReactLenis>
    );
  }
);

SmoothScroll.displayName = "SmoothScroll";

export default SmoothScroll;
