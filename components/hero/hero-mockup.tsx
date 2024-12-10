import React from "react";

// Imports
import HeroMockupNav from "./hero-mockup-nav";

const HeroMockup = () => {
  return (
    <div className="custom-flex-col gap-12">
      <p>Mockup goes here 👌</p>
      <div className="flex justify-center">
        <HeroMockupNav />
      </div>
    </div>
  );
};

export default HeroMockup;
