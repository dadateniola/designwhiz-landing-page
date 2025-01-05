"use client";

import React, { useEffect, useState } from "react";

// Types
import type { WebsiteSection } from "./types";

// Imports
import { navbar_links } from "./data";
import { NavbarLink } from "./navbar-components";

const NavbarLinks = () => {
  const [activeSection, setActiveSection] = useState<WebsiteSection | null>(
    null
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as WebsiteSection);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="flex items-center gap-1">
      {Object.entries(navbar_links).map(([text, { href, external }]) => (
        <NavbarLink
          key={text}
          href={href}
          external={external}
          active={activeSection === text}
        >
          {text}
        </NavbarLink>
      ))}
    </nav>
  );
};

export default NavbarLinks;
