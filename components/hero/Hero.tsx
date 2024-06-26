import React from "react";
import HeroText from "./HeroText";
import { HeroSparkles } from "./HeroSparkles";
import DownloadResume from "./DownloadResume";
import HeroToolTip from "./HeroToolTip";
import TopGlow from "../TopGlow";
import HeroTopGlow from "./HeroTopGlow";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen min-w-full flex flex-col items-center justify-center "
    >
      <HeroTopGlow  />
      <HeroSparkles />
      <HeroText />
      <div className="mt-5 flex flex-col  justify-center items-center gap-5 z-10 ">
        <HeroToolTip />
        <DownloadResume />
      </div>
    </section>
  );
};

export default Hero;
