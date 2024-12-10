import React from "react";
import Link from "next/link";

// Types
import type { NavbarProps } from "./types";

// Images
import { DesignWhizLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import { navbar_links } from "./data";
import { NavbarLink } from "./navbar-components";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header
      style={{
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(0, 0, 0, 0.10)",
        background: "rgba(255, 255, 255, 0.85)",
      }}
      className={clsx(
        "fixed top-9 left-2/4 -translate-x-2/4 w-[960px] p-2 pl-4 flex gap-2 justify-between rounded-full",
        className
      )}
    >
      <div className="flex items-center">
        <DesignWhizLogo />
        <p className="text-text-black text-base font-medium -tracking-[0.48px] leading-6">
          DesignWhiz
        </p>
      </div>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-1">
          {Object.entries(navbar_links).map(([text, href]) => (
            <NavbarLink key={text} href={href}>
              {text}
            </NavbarLink>
          ))}
        </nav>
        <div className="flex items-center">
          <Link
            href={""}
            className="pt-[9px] pb-3 px-5 bg-neutral-700 rounded-full border border-solid border-blue-900"
            style={{
              boxShadow:
                "0px -3px 1px 0px #0A1527 inset, 0px 0.241px 0.241px 0px rgba(0, 0, 0, 0.04), 0px 2px 2px 0px rgba(0, 0, 0, 0.35)",
            }}
          >
            <p className="text-white text-base font-medium leading-5">
              Create account
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
