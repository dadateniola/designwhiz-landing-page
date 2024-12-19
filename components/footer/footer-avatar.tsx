import React from "react";
import Image from "next/image";

// Types
import type { FooterAvatarProps } from "./types";

// Imports
import clsx from "clsx";
import { empty } from "@/app/config";
import { FooterPlane } from "../svg/svg";

const FooterAvatar: React.FC<FooterAvatarProps> = ({ x, y, src }) => {
  return (
    <div
      data-footer-avatar
      className="absolute"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="aspect-square bg-white border-2 border-white rounded-full overflow-hidden"
        style={{
          width: "clamp(40px, 5vw, 60px)",
        }}
      >
        <Image
          src={src || empty}
          alt="avatar"
          width={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={clsx(
          "absolute top-0 right-[2px] md:right-1 lg:right-[7px] -rotate-[4deg] flex items-center justify-center",
          "[&>svg]:w-[10px] [&>svg]:h-w-[10px] md:[&>svg]:w-auto md:[&>svg]:h-auto"
        )}
      >
        <div
          className="absolute top-0 w-[85%] h-[85%] rounded-full"
          style={{
            boxShadow: "0px 1.731px 2.308px 0px rgba(0, 0, 0, 0.08)",
          }}
        ></div>
        <FooterPlane size={14} />
      </div>
    </div>
  );
};

export default FooterAvatar;
