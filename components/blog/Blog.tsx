import React from "react";
import BlogTitle from "./BlogTitle";
import BlogButton from "./BlogButton";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/firebase/read/read_server";

const Blog = async () => {
  const posts = await getAllPosts();

  if (!posts) {
    return <div>No data</div>;
  }
  return (
    <section
      
      className="min-h-screen min-w-full flex flex-col items-center justify-center relative rounded-xl z-[0]"
    >
      <BlogTitle />
      <div className="flex">
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

      
    </section>
  );
};

export default Blog;
