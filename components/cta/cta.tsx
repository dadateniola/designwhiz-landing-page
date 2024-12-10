import React from "react";
import Link from "next/link";

// Types
import type { CTAProps } from "./types";

// Imports
import clsx from "clsx";
import { cta_button_types } from "./data";

const CTA: React.FC<CTAProps> = ({
  type,
  href,
  style,
  onClick,
  children,
  className,
}) => {
  const custom_props = {
    style: { ...cta_button_types[type], ...style },
    className: clsx(
      "rounded-full flex items-center justify-center",
      "text-white text-sm font-semibold leading-5 capitalize",
      className
    ),
  };

  return href ? (
    <Link href={href} {...custom_props}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} {...custom_props}>
      {children}
    </button>
  );
};

export default CTA;
