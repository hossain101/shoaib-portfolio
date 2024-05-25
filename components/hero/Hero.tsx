import React from "react";

import HeroText from "./HeroText";
import LinkedInButton from "./LinkedInButton";

import { HeroSparkles } from "./HeroSparkles";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center  md:py-10">
      <HeroSparkles />

      <HeroText />

      <div className="flex justify-center z-10">
        
      </div>
    </section>
  );
};

export default Hero;
