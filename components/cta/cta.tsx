import React from "react";
import Link from "next/link";

// Types
import type { CTAProps } from "./types";

// Imports
import clsx from "clsx";
import { cta_button_types } from "./data";
import Twinkles from "../twinkles/twinkles";

const CTA: React.FC<CTAProps> = ({
  type,
  href,
  style,
  onClick,
  children,
  className,
  normalCase,
}) => {
  const custom_props = {
    style: { ...cta_button_types[type], ...style },
    className: clsx(
      "relative rounded-full flex items-center justify-center",
      "text-white text-sm font-semibold leading-5",
      { capitalize: !normalCase },
      className
    ),
  };

  return href ? (
    <Link href={href} {...custom_props}>
      {children}
      <Twinkles />
    </Link>
  ) : (
    <button onClick={onClick} {...custom_props}>
      {children}
      <Twinkles />
    </button>
  );
};

export default CTA;
