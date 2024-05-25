import React from "react";
import { Spotlight } from "../ui/Spotlight";

const HeroSpotlight = () => {
  return (
    <div className="light">
      {/* Adjusted Spotlight 1 */}
      <Spotlight
        className="top-[-40px] left-0 sm:top-[-30px] sm:left-0 md:top-[-20px] md:left-60 lg:top-[-10px] lg:left-70 xl:top-[-5px] xl:left-80"
        fill="darkblue"
      />
      {/* Adjusted Spotlight 2 */}
      <Spotlight
        className="top-[-40px] left-0 sm:top-[-30px] sm:left-0 md:top-[-20px] md:left-60 lg:top-[-10px] lg:left-70 xl:top-[-5px] xl:left-80"
        fill="white"
      />
      {/* Adjusted Spotlight 3 */}
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full sm:h-[90vh] sm:w-[45vw] md:h-[100vh] md:w-[40vw] lg:h-[110vh] lg:w-[35vw] xl:h-[120vh] xl:w-[30vw]"
        fill="purple"
      />
    </div>
  );
};

export default HeroSpotlight;
