"use client";

import React from "react";

// Imports
import Hero from "@/components/hero/hero";
import Benefits from "@/components/benefits/benefits";
import Features from "@/components/features/features";
import Testimonials from "@/components/testimonials/testimonials";

// Imports

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <Features />
    </>
  );
};

export default LandingPage;
