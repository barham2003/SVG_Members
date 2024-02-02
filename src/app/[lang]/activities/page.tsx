import { getActivities } from "@/actions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { CarouselPlugin } from "./ImageCarouse";

interface Post {
  _id: string;
  title: string;
  content: string;
  photo: any[]; // You may define a proper type for the photo array
  createdAt: string;
  updatedAt: string;
}

export default async function page() {
  const posts: Post[] = await getActivities();
  return (
    <div className="flex flex-col items-center text-right gap-3">
      {posts.map((post, index: number) => (
        <Card
          key={index}
          className=" flex w-[300px] flex-col items-center gap-3 pt-4 text-right md:w-[600px]"
        >
          <CardHeader>
            <h2 className="text-xl">{post.title}</h2>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center">
              <CarouselPlugin images={post.photo} />
            </div>
          </CardContent>
          <CardFooter className=" w-full items-start px-5 pb-4">
            <p>{post.content}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  const langs = ["kur", "eng"];

  return langs.map((lang: any) => {
    return {
      lang,
    };
  });
}
