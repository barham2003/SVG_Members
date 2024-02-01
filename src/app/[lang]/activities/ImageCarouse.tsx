"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin({ images }: { images: string[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      className="w-full "
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Image
              src={src}
              height={600}
              width={600}
              alt="Image"
              className="rounded-sm"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="none" />
      <CarouselNext variant="none" />
    </Carousel>
  );
}
