import React from "react";
import { Inter_Tight } from "next/font/google";

// Imports
import clsx from "clsx";
import TestimonialsCard from "./testimonials-card";
import { SectionLabel } from "../global-components";
import { section_heading_text_styles } from "@/app/config";
import { testimonials_data } from "./data";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="py-[120px] custom-flex-col gap-[72px] bg-[#FAF9FF]">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel>Testimonials</SectionLabel>
          <h1
            className={clsx(
              inter_tight.className,
              "text-text-black max-w-[754px]",
              section_heading_text_styles
            )}
          >
            Don&apos;t just take our word for it, hear from our community.
          </h1>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {testimonials_data.map((testimonial, idx) => (
            <TestimonialsCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
