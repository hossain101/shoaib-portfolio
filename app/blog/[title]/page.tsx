import { getPost } from "@/firebase/read/read_server";
import { Image } from "@nextui-org/image";
import React from "react";

const page = async ({ params }: { params: { title: string } }) => {
  const encodedString = params.title;
const decodedString = decodeURIComponent(encodedString);
  const post = await getPost(decodedString);

  if (!post) {
    return <div>{decodedString}</div>;
  }
  
  return (
    <main className="flex border justify-center min-h-screen">
      <section className="p-10  gap-4 ">
        <h1 className="text-3xl font-bold">{post?.title}</h1>
        <h1 className="text-3xl font-bold">{post?.category}</h1>
        <h1 className="text-3xl font-bold">{post?.techStack}</h1>
        <Image src={post?.postImageUrl} alt="blog-image" height={500} width={500} />

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        ></div>
      </section>
    </main>
  );
};

export default page;
