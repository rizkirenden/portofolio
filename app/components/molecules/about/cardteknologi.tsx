import React from "react";
import { Card } from "../../atoms/card";
import Image from "next/image";
import { Subtitle } from "../../atoms/subtitle";
import { Button } from "../../atoms/button";
import { IoMdArrowRoundForward } from "react-icons/io";

// Data untuk setiap card
const dataTeknologi = [
  {
    title: "REACT JS",
    image: "/images/reactjs.png",
    color: "text-[#62D9F6]",
    imageHeight: "h-20",
  },
  {
    title: "LARAVEL",
    image: "/images/Laravel.png",
    color: "text-[#FF2D20]",
    imageHeight: "h-20",
  },
  {
    title: "EXPRESS JS",
    image: "/images/express-js.png",
    color: "text-[#000000]",
    imageHeight: "h-20",
  },
  {
    title: "POSTMAN",
    image: "/images/postman.png",
    color: "text-[#ED6D3E]",
    imageHeight: "h-20",
  },
  {
    title: ["MY", "SQL"],
    image: "/images/mysql.png",
    color: ["text-[#00678C]", "text-[#CE8B2C]"],
    imageHeight: "h-20",
  },

  {
    title: "GIT",
    image: "/images/git.png",
    color: "text-[#F05033]",
    imageHeight: "h-20",
  },
  {
    title: "TAILWIND",
    image: "/images/tailwind.png",
    color: "text-[#38BDF8]",
    imageHeight: "h-20",
  },
];

const Cardteknologi = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      {dataTeknologi.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          image={item.image}
          color={item.color}
          imageHeight={item.imageHeight}
        />
      ))}
    </div>
  );
};

interface CardItemProps {
  title: string | string[];
  image: string;
  color: string | string[];
  imageHeight: string;
}
// Komponen reusable untuk setiap card
const CardItem = ({ title, image, color, imageHeight }: CardItemProps) => {
  return (
    <Card
      rounded="rounded-lg"
      height="h-48"
      width="w-32"
      cardcolor="bg-white"
      className="relative p-4"
    >
      <div className={`relative w-full ${imageHeight} mb-4`}>
        <Image
          src={image}
          alt={Array.isArray(title) ? title.join("") : title}
          fill
          className="object-contain rounded"
        />
      </div>

      <div className="mb-4">
        {Array.isArray(title) ? (
          <Subtitle className="text-sm text-center">
            {title.map((part, i) => (
              <span key={i} className={color[i]}>
                {part}
              </span>
            ))}
          </Subtitle>
        ) : (
          <Subtitle className={`text-sm text-center ${color}`}>
            {title}
          </Subtitle>
        )}
      </div>

      <div>
        <Button
          className="text-white w-24 flex items-center justify-center gap-2"
          style={{
            backgroundColor: Array.isArray(color)
              ? color[0].match(/#(?:[0-9a-fA-F]{3}){1,2}/)?.[0]
              : color.match(/#(?:[0-9a-fA-F]{3}){1,2}/)?.[0],
          }}
        >
          <span>Lihat</span>
          <IoMdArrowRoundForward size={16} />
        </Button>
      </div>
    </Card>
  );
};

export default Cardteknologi;
