import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { TypewriterEffectSmooth } from "../ui/TypewriterEffect";
const HeroText = () => {
  return (
    <div className=" md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-[4rem] ">
      <TypewriterEffectSmooth
        words={[
          {
            text: "Shoaib",
            className:
              "text-center text-[40px] md:text-5xl lg:text-8xl uppercase font-bold  ",
          },
          {
            text: "Hossain",
            className:
              "text-center text-[40px] md:text-5xl lg:text-8xl uppercase font-bold text-blue-500 dark:text-red-500 italic",
          },
        ]}
      />
      <div className=" mt-[-1rem]">
        <TextGenerateEffect
          words="A Dynamic Result Oriented SOFTWARE ENGINEER"
          className="text-center text-[25px] md:text-5xl lg:text-6xl  tracking-wide"
        />
      </div>
    </div>
  );
};

export default HeroText;
