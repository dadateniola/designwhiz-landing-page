"use client";

import { useContext, createContext } from "react";

// Types
import type { HeroMockupContextProps } from "./types";

export const HeroMockupContext = createContext<
  HeroMockupContextProps | undefined
>(undefined);

export const useHeroMockupContext = () => {
  const context = useContext(HeroMockupContext);

  if (!context) {
    throw new Error(
      "useHeroMockupContext must be used within a HeroMockupContextProvider"
    );
  }

  return context;
};
