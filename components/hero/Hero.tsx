import React from "react";

import HeroSpotlight from "./HeroSpotlight";
import HeroText from "./HeroText";
import LinkedInButton from "./LinkedInButton";

import { motion } from "framer-motion";
import { HeroSparkles } from "./HeroSparkles";
import HeroTop from "../TopGlow";
import { SparklesCore } from "../ui/Sparkles";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center  md:py-10">
      <HeroSparkles />

      <HeroText />

      <div className="flex justify-center z-10"></div>
    </section>
  );
};

export default Hero;
