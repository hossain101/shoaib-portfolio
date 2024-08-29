import { getThreePosts } from "@/firebase/read/read_server";
import React from "react";
import BlogCard from "./BlogCard";

const BlogCardsHome = async () => {
  const posts = await getThreePosts();
  return (
    <>
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
    </>
  );
};

export default BlogCardsHome;
