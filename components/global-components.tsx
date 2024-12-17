// Types
import type { SectionLabelProps } from "./types";

// Images
import { LabelStar } from "./svg/svg";

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
