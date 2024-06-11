import { Button } from "@nextui-org/button";
import Link from "next/link";

import React from "react";

const FullExperience = () => {
  return (
    <div className="experience-button max-w-36 relative">
    <Link href="/experience" className="text-nowrap">
      Full Journey
    </Link>
    </div>
  );
};

export default FullExperience;
