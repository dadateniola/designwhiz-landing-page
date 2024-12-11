// Types
import type { SectionLabelProps } from "./types";

// Images
import { LabelStar } from "./svg/svg";

export const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => (
  <div className="py-[6px] px-4 rounded-full gradient-cta">
    <div className="flex items-center gap-1">
      <LabelStar />
      <p className="gradient-cta-text">{children}</p>
    </div>
  </div>
);
