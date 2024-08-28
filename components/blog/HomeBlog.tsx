'use client';

import React, { useEffect, useState } from "react";
import BlogTitle from "./BlogTitle";
import BlogButton from "./BlogButton";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/firebase/read/read_server";
import { usePathname } from "next/navigation";

const HomeBlog = () => {
  const [posts, setPosts] = useState<Record<string, string>[]>([]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname()

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts || []);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts.length) {
    return <div>No data</div>;
  }




  
  return (
    <section
      id="blog"
      className="min-h-screen min-w-full flex flex-col items-center justify-center relative rounded-xl z-[0]"
    >
      <BlogTitle />
      <div className="flex gap-2 p-2">
        {/* Show only 3 cards on home page */}
        {pathname === '/' ? 
          posts.slice(0, 1).map((post: Record<string, string>, index: number) => (
            <BlogCard
              key={index}
              title={post.title}
              category={post.category}
              techStack={post.techStack}
              postImageUrl={post.postImageUrl}
              footerURL={post.footerURL}
              footerText={post.footerText}
            />
          )) : 
          // Otherwise, show all cards
          posts.map((post: Record<string, string>, index: number) => (
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
export default HomeBlog;