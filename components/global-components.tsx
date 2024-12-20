import Image from "next/image";

// Types
import type { PerspectiveGridProps, SectionLabelProps } from "./types";

// Images
import { LabelStar } from "./svg/svg";
import PerspectiveGridImage from "@/public/images/perspective-grid.png";

// Imports
import clsx from "clsx";

export const SectionLabel: React.FC<SectionLabelProps> = ({
  style,
  children,
  icon = true,
  customContent,
}) => (
  <div className="py-[6px] px-4 rounded-full gradient-cta" style={style}>
    <div className="w-full h-full flex items-center gap-1">
      {icon && <LabelStar />}
      {customContent ? (
        children
      ) : (
        <p className="gradient-cta-text">{children}</p>
      )}
    </div>
  </div>
);

export const PerspectiveGrid: React.FC<PerspectiveGridProps> = ({
  style,
  className,
  ...props
}) => (
  <div
    className={clsx("absolute top-0 left-0 w-full h-[90vh]", className)}
    style={style}
    {...props}
  >
    <Image
      src={PerspectiveGridImage}
      alt="perspective grid"
      fill
      sizes="150vw"
      className="object-cover object-bottom"
    />
  </div>
);
