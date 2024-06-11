import React from "react";
import { HeroHighlight } from "../ui/hero-highlight";
import ExperienceGrid from "./ExperienceGrid";
import ExperienceTitle from "./ExperienceTitle";
import FullExperience from "./FullExperience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen min-w-full flex flex-col items-center justify-center z-[0] relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,transparent_59px,#4f4f4f2e_1px)] bg-[size:60px_60px] pb-5 "
    >
      <HeroHighlight />

      <ExperienceTitle />
      <ExperienceGrid />
      <FullExperience />
    </section>
  );
};

export default Experience;
