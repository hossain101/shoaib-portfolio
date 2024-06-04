import React from "react";

import { HeroHighlight } from "../ui/hero-highlight";
import ExperienceGrid from "./ExperienceGrid";
import ExperienceTitle from "./ExperienceTitle";

const Experience = () => {
  return (
    <section id="experience" className="min-h-full flex flex-col items-center  ">
      <div className="w-full  flex flex-col items-center min-h-screen z-[0] absolute bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,transparent_59px,#4f4f4f2e_1px)] bg-[size:60px_60px] ">
        <ExperienceTitle />
        <HeroHighlight>
          <ExperienceGrid />
        </HeroHighlight>
      </div>
    </section>
  );
};

export default Experience;
