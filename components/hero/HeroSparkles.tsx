import React from "react";
import { SparklesCore } from "../ui/Sparkles";

export function HeroSparkles() {
  return (
    <SparklesCore
      background="transparent"
      minSize={0.7}
      maxSize={1}
      particleDensity={25}
      className="w-full h-screen z-[0] absolute  "
      particleColor="#FF5349"
    />
  );
}
