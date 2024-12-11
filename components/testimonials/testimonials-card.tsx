import React from "react";
import Image from "next/image";

// Types
import type { TestimonialsCardProps } from "./types";

// Images
import { TestimonialStar } from "../svg/svg";

// Imports
import { empty } from "@/app/config";
import Picture from "../picture/picture";

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  pfp,
  name,
  desc,
  stars = 0,
  preview = empty,
}) => {
  return (
    <div
      className="w-[350px] p-2 pb-8 rounded-3xl bg-white"
      style={{
        border: "1px solid #F0F0F0",
        boxShadow:
          "0px -10.44px 17.15px -6.67px rgba(226, 227, 242, 0.50) inset",
      }}
    >
      <div className="custom-flex-col gap-6 h-full">
        <Image
          src={preview}
          width={700}
          alt="testimonial image"
          className="w-full aspect-video rounded-2xl object-cover"
        />
        <div className="custom-flex-col justify-between gap-10 flex-1 px-5">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <TestimonialStar
                  key={idx}
                  size={20}
                  color={idx >= stars ? "#F0F2F5" : undefined}
                />
              ))}
            </div>
            <p className="text-text-sub text-base text-center font-normal -tracking-[0.32px]">
              {desc}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <Picture src={pfp} size={48} className="rounded-xl" />
              <p className="text-text-sub text-base font-medium capitalize">
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
