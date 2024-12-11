import React from "react";

// Types
import type { NavbarProps } from "./types";

// Images
import { DesignWhizLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import { navbar_links } from "./data";
import { NavbarCTA, NavbarLink } from "./navbar-components";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header
      style={{
        width: "min(960px, 80dvw)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(0, 0, 0, 0.10)",
        background: "rgba(255, 255, 255, 0.85)",
      }}
      className={clsx(
        "fixed top-9 left-2/4 -translate-x-2/4 p-2 pl-4 flex gap-2 justify-between rounded-full",
        className
      )}
    >
      <div className="flex gap-2 items-center">
        <DesignWhizLogo />
        <p className="text-text-black text-base font-medium -tracking-[0.48px] leading-6">
          DesignWhiz
        </p>
      </div>
      <div className="hidden navbar:flex items-center gap-6">
        <nav className="flex items-center gap-1">
          {Object.entries(navbar_links).map(([text, href]) => (
            <NavbarLink key={text} href={href}>
              {text}
            </NavbarLink>
          ))}
        </nav>
        <div className="flex items-center">
          <NavbarCTA>Create account</NavbarCTA>
        </div>
      </div>
      <div className="flex navbar:hidden items-center">
        <NavbarCTA>Sign up</NavbarCTA>
      </div>
    </header>
  );
};

export default Navbar;
