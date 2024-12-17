"use client";

import React, { useState } from "react";

// Types
import { TooltipProps } from "./types";

// Imports
import clsx from "clsx";

const Tooltip: React.FC<TooltipProps> = ({
  text,
  style,
  children,
  className,
  normal_case,
  position = "right",
  classPosition = "relative",
}) => {
  const [tooltipDisabled, setTooltipDisabled] = useState(false);

  const handleClick = () => {
    setTooltipDisabled(true);
  };

  const handleMouseLeave = () => {
    setTooltipDisabled(false);
  };

  return (
    <div
      style={style}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      className={clsx("group", classPosition, className)}
    >
      {children}
      {text && !tooltipDisabled && (
        <div
          className={clsx(
            "absolute z-10 h-8 px-[10px] opacity-0 flex items-center group-hover:opacity-100 delay-300 duration-300 ease-out rounded-[4px] border border-solid border-text-black bg-neutral-700 text-white text-sm font-medium pointer-events-none whitespace-nowrap",
            {
              capitalize: !normal_case,
              "normal-case": normal_case,
            },
            {
              "bottom-full left-2/4 -translate-x-2/4 group-hover:-translate-y-[12px]":
                position === "top",
              "top-2/4 right-full -translate-y-2/4 group-hover:-translate-x-[12px]":
                position === "left",
              "top-full left-2/4 -translate-x-2/4 group-hover:translate-y-[12px]":
                position === "bottom",
              "top-2/4 left-full -translate-y-2/4 group-hover:translate-x-[12px]":
                position === "right",
            }
          )}
          style={{
            lineHeight: "16px",
            boxShadow: "0px 12px 24px -12px rgba(201, 215, 228, 0.50)",
          }}
        >
          <div
            className={clsx(
              "absolute rotate-45 w-[9px] h-[9px] rounded-br-sm bg-neutral-700 border-b border-r border-solid border-neutral-700",
              {
                "bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4":
                  position === "top",
                "top-2/4 right-0 translate-x-2/4 -translate-y-2/4":
                  position === "left",
                "top-0 left-2/4 -translate-x-2/4 -translate-y-2/4":
                  position === "bottom",
                "top-2/4 left-0 -translate-x-2/4 -translate-y-2/4":
                  position === "right",
              }
            )}
          ></div>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
