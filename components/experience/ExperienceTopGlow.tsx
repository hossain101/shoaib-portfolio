import React from "react";

const ExperienceTopGlow = () => {
  return (
    <div className="animate-pulse animate-infinite  animate-ease-in ">
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-700 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-700 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-600 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-600 to-transparent h-px w-1/4" />
    </div>
  );
};

export default ExperienceTopGlow;
