import React from "react";

import { BorderBeam } from "../ui/border-beams";
import UniqueStrategyCard from "./UniqueStrategyCard";
import { UniqueStrategyData } from "./uniqueStrategyData";
import UniqueStrategyTitle from "./UniqueStrategyTitle";

const UniqueStrategy = () => {
  return (
    <section
        id="unique-strategy"
        className="min-h-screen min-w-full flex flex-col items-center justify-center relative rounded-xl"
    >
      <UniqueStrategyTitle />

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 pb-3 mx-3">
      
        {UniqueStrategyData.map((data, index) => (
          <UniqueStrategyCard
            key={index}
            title={data.title}
            description={data.description}
            imgUrl={data.imgUrl}
          />
        ))}
      
      </div>
      
     
      <BorderBeam
        size={500}
        duration={30}
        delay={9}
        borderWidth={2.5}
        colorFrom="#FFD700"
        colorTo="#FEBE10"
      />
    </section>
  );
};

export default UniqueStrategy;
