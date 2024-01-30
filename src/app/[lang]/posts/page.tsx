import { getActivities } from "@/actions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <div className="flex flex-col items-center text-right">
      {posts.map((post, index: number) => (
        <Card key={index}>
          <CardHeader>
            <h2 className="text-xl">{post.title}</h2>
          </CardHeader>
          <CardContent className="max-w-[420px]">
            <div className="flex flex-col items-center gap-4">
              <CarouselPlugin images={post.photo} />
              {post.content}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
