import React from "react";

// Types
import type { FooterProps } from "./types";

// Imports
import clsx from "clsx";
import CTA from "../cta/cta";

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={clsx("relative h-screen py-[120px]", className)}
      style={{
        background:
          "linear-gradient(180deg, rgba(128, 47, 209, 0.00) 21.88%, rgba(156, 83, 250, 0.37) 239.02%), #FAF9FF",
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="custom-flex-col gap-8">
          <h2
            className={clsx(
              "text-[rgba(0,0,0,0.90)] font-medium text-center -tracking-[1.6px]",
              "text-[34px] xs:text-[40px] sm:text-[50px] xl:text-[60px] 2xl:text-[70px]",
              "leading-[34px] xs:leading-[40px] sm:leading-[50px] xl:leading-[60px] 2xl:leading-[70px]"
            )}
          >
            This is a space where
            <br />
            every <span className="text-purple-base italic">creative</span>{" "}
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
    </footer>
  );
};

export default Footer;
