"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const data = [
  {
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1201531715370360963/welcome.jpeg?ex=65ca289c&is=65b7b39c&hm=a8eee99b777786b9087e3251453f2de2f16096a88db1fb4e1e0c65c8fb089f6c&=&format=webp&width=2022&height=1138",
    title: "Welcome To ApexMed",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis quam corrupti ab consequatur totam assumenda deserunt repellat similique praesentium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, distinctio.",
  },
  {
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1201493211588333608/doctor.jpeg?ex=65ca04c0&is=65b78fc0&hm=9fba2609bde4c71a2ce35af261796b89d7bf276ae0f1392dffb0b015977d60d0&=&format=webp&width=1718&height=1138",
    title: "be awesome",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis quam corrupti ab consequatur totam assumenda deserunt repellat similique praesentium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, distinctio.",
  },
  {
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1201493469194100856/docc.jpeg?ex=65ca04fd&is=65b78ffd&hm=88de365c316763ab88cb8b60b2595d64ac4cabf254a9f41d160a13f1dbbdd0ed&=&format=webp&width=1708&height=1138",
    title: "Try to be healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis quam corrupti ab consequatur totam assumenda deserunt repellat similique praesentium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, distinctio.",
  },
];

export function Hero() {
  return (
    <Carousel
      opts={{
        slidesToScroll: 1,
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-[98vw] z-10"
    >
      <CarouselContent>
        {data.map((item, index) => {
          return (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  className="bg-cover"
                >
                  <CardContent className="h-[60vh] relative bg-black bg-opacity-25 text-center">
                    <div className="  absolute bottom-16 text-white ">
                      <h3 className="text-4xl font-bold text uppercase">
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
