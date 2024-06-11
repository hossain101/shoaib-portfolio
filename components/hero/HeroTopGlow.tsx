import React from "react";

const HeroTopGlow = () => {
  return (
    <div className="absolute inset-x-20 top-0 z-10 animate-pulse animate-infinite animate-ease-in">
      <div className="bg-gradient-to-r from-transparent via-red-700 to-transparent h-[2px] w-3/4 blur-sm"></div>
      <div className="bg-gradient-to-r from-transparent via-red-700 to-transparent h-px w-3/4"></div>
      <div className="bg-gradient-to-r from-transparent via-red-800 to-transparent h-[5px] w-1/4 blur-sm"></div>
      <div className="bg-gradient-to-r from-transparent via-red-800 to-transparent h-px w-1/4"></div>
    </div>
  );
};

export default HeroTopGlow;
