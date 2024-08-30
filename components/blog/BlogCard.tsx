import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import { WobbleCard } from "../ui/wobble-card";
import Link from "next/link";
import Blog from "./Blog";
import BlogCardFooter from "./BlogCardFooter";

const BlogCard = ({
  title,
  category,
  techStack,
  postImageUrl,
  footerURL,
  footerText,
}: {
  title: string;
  category: string;
  techStack: string;
  postImageUrl: string;
  footerText: string;
  footerURL: string;
}) => {
  return (
    <div className=" mx-auto w-full overflow-hidden p-2">
      <WobbleCard containerClassName="bg-black-800" className="">
        <Link href="/blog" color="success">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">{title}</p>
                <p className="text-small text-default-500">{techStack!}</p>
                {category!}
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <Image src={postImageUrl!} alt="blog-image" />
            </CardBody>
            <Divider />
            <BlogCardFooter footerURL={footerURL!} footerText={footerText!} />
          </Card>
        </Link>
      </WobbleCard>
    </div>
  );
};

export default BlogCard;
