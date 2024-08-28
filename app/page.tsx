import Blog from "@/components/blog/Blog";
import HomeBlog from "@/components/blog/HomeBlog";
import HomeBlogServer from "@/components/blog/HomeBlogServer";

import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import UniqueStrategy from "@/components/unique-strategy/UniqueStrategy";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />

     <HomeBlogServer />
    </>
  );
}
