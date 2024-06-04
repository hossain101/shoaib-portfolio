import React from "react";
import { TypewriterEffectSmooth } from "../ui/TypewriterEffect";

const ExperienceTitle = () => {
  return (
    <div className="flex flex-col items-center z-20 md:max-w-2xl lg:max-w-[60vw]   ">
      <TypewriterEffectSmooth
        words={[
          {
            text: "journey",
            className:
              "text-center text-[40px] md:text-5xl lg:text-8xl uppercase font-bold text-blue-500 dark:text-red-500 italic",
          },
        ]}
      />
    </div>
  );
};

export default ExperienceTitle;
