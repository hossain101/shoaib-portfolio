import Link from "next/link";
import React from "react";

const BlogButton = () => {
  return (
    <div className="blog-button max-w-36 relative">
      <Link href="/blog" className="text-nowrap">
        Knowledge Box
      </Link>
    </div>
  );
};

export default BlogButton;
