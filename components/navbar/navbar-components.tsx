import Link from "next/link";

// Types
import type { NavbarLinkProps } from "./types";

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
