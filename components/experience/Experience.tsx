import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-full flex flex-col items-center justify-center    "
    >
      <div className="w-full h-screen z-[0] absolute ">
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Experience;
