import React from "react";
import HeroText from "./HeroText";
import { HeroSparkles } from "./HeroSparkles";
import DownloadResume from "./DownloadResume";
import HeroToolTip from "./HeroToolTip";

const Hero = () => {
  return (
    <section className="min-h-full flex flex-col items-center justify-center  md:py-10">
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
