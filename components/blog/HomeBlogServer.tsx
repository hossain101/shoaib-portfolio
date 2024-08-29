import React from "react";
import BlogTitle from "./BlogTitle";
import BlogButton from "./BlogButton";

const HomeBlogServer = () => {
  return (
    <section
      id="blog"
      className="min-h-screen min-w-full flex flex-col items-center justify-center relative rounded-xl z-[0]"
    >
      <BlogTitle />

      <BlogButton />
    </section>
  );
};

export default HomeBlogServer;
