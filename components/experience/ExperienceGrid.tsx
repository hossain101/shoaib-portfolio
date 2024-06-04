import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { ExperienceCardData } from "./experienceCardData";
import ExperienceCard from "./ExperienceCard";

const ExperienceGrid = () => {
  return (
    <HoverEffect>
      

      {ExperienceCardData.map((card) => (
        <ExperienceCard
          key={card.id}
          title={card.title}
          company={card.company}
          year={card.year}
          desc={card.desc}
          imgUrl={card.imgUrl}
        />
      ))}
    </HoverEffect>
  );
};

export default ExperienceGrid;
