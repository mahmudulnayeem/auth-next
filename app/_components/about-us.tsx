import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. John Doe",
    speciality: "Heart Surgeon",
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1200717754248994826/doctor-removebg-preview.png?ex=65c7328c&is=65b4bd8c&hm=29c4b3a3ea4a927cb039f1caef8ca00ab779abe8913abeab87a852b94ffe2760&=&format=webp&quality=lossless&width=1224&height=816",
  },
  {
    name: "Dr. Richard Johnson",
    speciality: "Orthopedic Surgeon",
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1200718401031634995/dddd-removebg-preview.png?ex=65c73327&is=65b4be27&hm=5f74ab41087bc7d1b9b1a292e8c0bd9fc285a07dc76937318f1c9683258e700b&=&format=webp&quality=lossless&width=1224&height=816",
  },
  {
    name: "Dr. Jane Smith",
    speciality: "Neurologist",
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1200718826975797349/bbb-removebg-preview.png?ex=65c7338c&is=65b4be8c&hm=ef81500a7b376466832077a9497722c98f5427bb9d55fad1a8517192ec535384&=&format=webp&quality=lossless&width=758&height=816",
  },
  {
    name: "Dr. John Doe",
    speciality: "Heart Surgeon",
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1201547379791364096/docccc.png?ex=65ca3733&is=65b7c233&hm=360097078c053a6a1a9feafee91b904654647d11c204a5e37210f66f52364ec8&=&format=webp&quality=lossless&width=1080&height=720",
  },
  {
    name: "Dr. Richard Johnson",
    speciality: "Orthopedic Surgeon",
    image:
      "https://media.discordapp.net/attachments/922720652803321906/1201547684058775684/douu.png?ex=65ca377b&is=65b7c27b&hm=b12ab6da17aebb4882e315a2f482a960df09a07e5f7589bdc7040ae571ce2b57&=&format=webp&quality=lossless&width=1074&height=720",
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Our Doctors
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We have a team of experienced and qualified doctors.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {doctors.map((doctor, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 hover:shadow-lg"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center ">
                        <div className="flex flex-col space-y-2">
                          <Image
                            alt="Doctor"
                            className="aspect-square overflow-hidden rounded-lg object-cover"
                            height="300"
                            src={doctor.image}
                            width="300"
                          />
                          <h3 className="text-lg font-bold">{doctor.name}</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            {doctor.speciality}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
