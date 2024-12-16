"use client";

import React from "react";

// Imports
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Benefits from "@/components/benefits/benefits";
import Features from "@/components/features/features";
import Testimonials from "@/components/testimonials/testimonials";

// Imports

const LandingPage = () => {
  return (
    <>
      <Navbar className="z-[4]" />
      <main className="relative z-[3]">
        <Hero />
        <Benefits />
        <Testimonials />
        <Features />
      </main>
      <Footer className="z-[2]" />
    </>
  );
};

export default LandingPage;
