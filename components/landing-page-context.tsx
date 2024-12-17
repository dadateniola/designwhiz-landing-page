"use client";

import { useContext, createContext } from "react";

// Types
import { LandingPageContextProps } from "./types";

export const LandingPageContext = createContext<
  LandingPageContextProps | undefined
>(undefined);

export const useLandingPageContext = () => {
  const context = useContext(LandingPageContext);

  if (!context) {
    throw new Error(
      "useLandingPageContext must be used within a LandingPageContextProvider"
    );
  }

  return context;
};
