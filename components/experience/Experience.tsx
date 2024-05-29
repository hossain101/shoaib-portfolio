
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";


const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-full flex flex-col items-center justify-center     "
    >
      <div className="w-full h-screen z-[0] absolute bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,transparent_59px,#4f4f4f2e_1px)] bg-[size:60px_60px] ">
        <HeroHighlight>
          <div></div>
        </HeroHighlight>
      </div>
    </section>
  );
};

export default Experience;
