import Link from "next/link";

// Types
import type { NavbarCTAProps, NavbarLinkProps } from "./types";

// Imports
import clsx from "clsx";
import Twinkles from "../twinkles/twinkles";

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  active,
  external,
  children,
}) => {
  const class_style =
    "navbar-link py-[6px] px-[13px] rounded-full duration-150";
  const content = (
    <p className="text-text-weak text-sm font-medium capitalize -tracking-[0.28px] leading-5">
      {children}
    </p>
  );

  return external ? (
    <a href={href} className={class_style} target="_blank">
      {content}
    </a>
  ) : (
    <Link href={href} className={clsx(class_style, { active })}>
      {content}
    </Link>
  );
};

export const NavbarCTA: React.FC<NavbarCTAProps> = ({ children }) => (
  <Link
    href={""}
    className="relative pt-[9px] pb-3 px-5 bg-neutral-700 rounded-full border border-solid border-blue-900 whitespace-nowrap"
    style={{
      boxShadow:
        "0px -3px 1px 0px #0A1527 inset, 0px 0.241px 0.241px 0px rgba(0, 0, 0, 0.04), 0px 2px 2px 0px rgba(0, 0, 0, 0.35)",
    }}
  >
    <p className="text-white text-base font-medium leading-5">{children}</p>
    <Twinkles />
  </Link>
);
