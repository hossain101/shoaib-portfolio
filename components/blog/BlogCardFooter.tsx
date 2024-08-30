import { CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import React from "react";

const BlogCardFooter = ({
  footerURL,
  footerText,
}: {
  footerURL: string;
  footerText: string;
}) => {
  return (
    <CardFooter>
      <Link href={footerURL!} className=" text-green-400 italic" showAnchorIcon>
        {footerText!}
      </Link>
    </CardFooter>
  );
};

export default BlogCardFooter;
