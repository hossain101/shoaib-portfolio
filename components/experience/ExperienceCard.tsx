import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

const ExperienceCard = ({
  title,
  company,
  year,
  desc,
  imgUrl,
}: {
  title: string;
  company: string;
  year: string;
  desc: string;
  imgUrl: string;
}) => {
  return (
    <Card
      isFooterBlurred
      className=" md:w-[620px] md:h-[420px] col-span-12 sm:col-span-7 z-20"
    >
      <CardHeader className="absolute bg-black/20 top-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div
          className={`rounded-full bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 border border-white opacity-85 outline-none shadow-inset-red-900 hover:shadow-none text-white font-bold`}
        >
          {title}
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0  object-cover w-full h-full "
        src={imgUrl}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-small text-white/90">{company}</p>
            <p className="text-tiny text-white/80">{year}</p>
          </div>
        </div>
        <Button radius="full" size="sm">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
