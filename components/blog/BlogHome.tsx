import React from "react";
import BlogTitle from "./BlogTitle";
import BlogButton from "./BlogButton";
import BlogCard from "./BlogCard";
import { getThreePosts } from "@/firebase/read/read_server";

const BlogHome = async () => {
  const posts = await getThreePosts();

  if (!posts) {
    return <div>No data</div>;
  }
  return (
    <section
      id="blog"
      className="min-h-screen min-w-full flex flex-col items-center justify-center relative rounded-xl z-[0]"
    >
      <BlogTitle />
      <div className="flex gap-2 p-2">
        {posts.map((post: Record<string, string>, index: number) => (
          <BlogCard
            key={index}
            title={post.title}
            category={post.category}
            techStack={post.techStack}
            postImageUrl={post.postImageUrl}
            footerURL={post.footerURL}
            footerText={post.footerText}
          />
        ))}
      </div>
      <BlogButton />
    </section>
  );
};

export default BlogHome;
