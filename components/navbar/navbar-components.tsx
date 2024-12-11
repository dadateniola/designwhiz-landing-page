import Link from "next/link";

// Types
import type { NavbarCTAProps, NavbarLinkProps } from "./types";

export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="navbar-link py-[6px] px-[13px] rounded-full bg-neutral-0 duration-300"
  >
    <p className="text-text-sub text-sm font-medium capitalize -tracking-[0.28px] leading-5">
      {children}
    </p>
  </Link>
);

export const NavbarCTA: React.FC<NavbarCTAProps> = ({ children }) => (
  <Link
    href={""}
    className="pt-[9px] pb-3 px-5 bg-neutral-700 rounded-full border border-solid border-blue-900"
    style={{
      boxShadow:
        "0px -3px 1px 0px #0A1527 inset, 0px 0.241px 0.241px 0px rgba(0, 0, 0, 0.04), 0px 2px 2px 0px rgba(0, 0, 0, 0.35)",
    }}
  >
    <p className="text-white text-base font-medium leading-5">{children}</p>
  </Link>
);
