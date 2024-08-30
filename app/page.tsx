import Blog from "@/components/blog/Blog";
import BlogHome from "@/components/blog/BlogHome";

import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import UniqueStrategy from "@/components/unique-strategy/UniqueStrategy";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />

      <BlogHome />
    </>
  );
}
