import React from "react";
import Image from "next/image";

// Types
import type { PictureProps } from "./types";

// Imports
import clsx from "clsx";
import { empty } from "@/app/config";

const Picture: React.FC<PictureProps> = ({
  src,
  alt,

  size = 48,
  width,
  height,

  style,
  className,
  objectFit = "cover",
  resolutionMultiplier = 2,
}) => {
  // Fallbacks
  const imageSrc = src || empty;
  const imageAlt = alt || "profile picture";
  const imageWidth = width ?? size;
  const imageHeight = height ?? size;

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={imageWidth * resolutionMultiplier}
      height={imageHeight * resolutionMultiplier}
      className={clsx("", className)}
      style={{
        objectFit,
        width: imageWidth,
        height: imageHeight,
        minWidth: imageWidth,
        minHeight: imageHeight,
        maxWidth: imageWidth,
        maxHeight: imageHeight,
        ...style,
      }}
    />
  );
};

export default Picture;
