"use client";

import React from "react";

// Imports
import clsx from "clsx";
import { testimonials_data } from "./data";
import TestimonialsCard from "./testimonials-card";
import { SectionLabel } from "../global-components";
import { inter_tight, section_heading_text_styles } from "@/app/config";
// ----- Swiper -----
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

const Testimonials = () => {
  //Functions
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
            modules={[Mousewheel, Pagination]}
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
        {/* <div></div> */}
      </div>
    </section>
  );
};

export default Testimonials;
