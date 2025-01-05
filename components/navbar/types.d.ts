// Imports
import { navbar_links } from "./data";

export interface NavbarProps {
  className?: string;
}

export interface NavbarLinkProps {
  href: string;
  active?: boolean;
  external?: boolean;
  children: React.ReactNode;
}

export interface NavbarCTAProps {
  children: React.ReactNode;
}

export type WebsiteSection = keyof typeof navbar_links;
