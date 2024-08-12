import React from "react";
import { TypewriterEffectSmooth } from "../ui/TypewriterEffect";

const BlogTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth
        words={[
          {
            text: "learn",
            className:
              "text-center text-2xl md:text-5xl lg:text-6xl uppercase font-bold dark:text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-900 italic",
          },
          {
            text: "what i",
            className:
              "text-center text-2xl md:text-5xl lg:text-6xl uppercase font-bold",
          },
          {
            text: "learned",
            className:
              "text-center text-3xl md:text-6xl lg:text-7xl uppercase font-bold text-blue-500 dark:text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-900 italic",
          },
        ]}
        cursorClassName="bg-green-800"
      />
    </div>
  );
};

export default BlogTitle;
