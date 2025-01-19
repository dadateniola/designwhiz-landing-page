"use client";

import React from "react";

// Images
import { TestimonialChevron } from "../svg/svg";

// Imports
import clsx from "clsx";
import { testimonials_data } from "./data";
import TestimonialsCard from "./testimonials-card";
import { SectionLabel } from "../global-components";
import { inter_tight, section_heading_text_styles } from "@/app/config";
// ----- Swiper -----
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  // Functions
  const isOdd = (num: number) => num % 2 !== 0;

  return (
    <section id="testimonials">
      <div className="py-[64px] sm:py-[120px] custom-flex-col gap-10 md:gap-[72px] bg-[#FAF9FF]">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel>Testimonials</SectionLabel>
          <h1
            className={clsx(
              inter_tight.className,
              "text-text-black",
              section_heading_text_styles
            )}
          >
            Don&apos;t just take our word for it,
            <br />
            hear from our community.
          </h1>
        </div>
        <div>
          <Swiper
            grabCursor
            mousewheel
            spaceBetween={12}
            slidesPerView={"auto"}
            navigation={{
              nextEl: "[data-testimonial-slider-next]",
              prevEl: "[data-testimonial-slider-prev]",
            }}
            pagination={{
              type: "bullets",
              clickable: true,
              el: "[data-testimonial-slider-pagination]",
            }}
            modules={[Mousewheel, Pagination, Navigation]}
            style={{ padding: "12px 0" }}
          >
            {testimonials_data.map((testimonial, idx) => (
              <SwiperSlide key={idx} style={{ width: "auto", height: "auto" }}>
                <TestimonialsCard
                  data={testimonial}
                  spacing={isOdd(idx + 1) ? "up" : "down"}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide style={{ width: "auto", height: "auto" }}>
              <div className="w-10"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4">
            <button
              data-testimonial-slider-prev
              className="p-1 rounded-full bg-[#F6F5FF]"
            >
              <TestimonialChevron />
            </button>
            <div data-testimonial-slider-pagination></div>
            <button
              data-testimonial-slider-next
              className="p-1 rounded-full bg-[#F6F5FF] -scale-x-[1]"
            >
              <TestimonialChevron />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
