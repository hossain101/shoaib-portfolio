import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

const UniqueStrategyCard = ({
  title,
  description,
  imgUrl,
}: {
  title?: string;
  description?: string;
  imgUrl?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <BackgroundGradient className="rounded-[22px] w-full max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 bg-white dark:bg-zinc-900 overflow-hidden">
        <Image
          src={imgUrl!}
          alt="strategy-image"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover"
        />
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-600 dark:text-neutral-400 mt-4">
          {description}
        </p>
      </BackgroundGradient>
    </div>
  );
};

export default UniqueStrategyCard;
