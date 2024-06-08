import React from "react";

import { HeroHighlight } from "../ui/hero-highlight";
import ExperienceGrid from "./ExperienceGrid";
import ExperienceTitle from "./ExperienceTitle";
import FullExperience from "./FullExperience";
import { Link } from "@nextui-org/link";

const Experience = () => {
  return (
    <section id="experience" className="min-h-full min-w-full    ">
      <div className="min-w-full  min-h-screen flex flex-col items-center   z-[0] absolute bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,transparent_59px,#4f4f4f2e_1px)] bg-[size:60px_60px] ">
        <HeroHighlight />

        <ExperienceTitle />
        <ExperienceGrid />
        <FullExperience />
      </div>
    </section>
  );
};

export default Experience;
