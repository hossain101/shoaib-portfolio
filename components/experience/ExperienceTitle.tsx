import React from "react";
import { TypewriterEffectSmooth } from "../ui/TypewriterEffect";

const ExperienceTitle = () => {
  return (
    <div className=" z-20   ">
      <TypewriterEffectSmooth
        words={[
          {
            text: "Journey",
            className:
              "text-center tracking-wide text-[40px] md:text-5xl lg:text-8xl uppercase font-bold text-blue-500 dark:text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 italic",
          },
        ]}
      />
    </div>
  );
};

export default ExperienceTitle;
