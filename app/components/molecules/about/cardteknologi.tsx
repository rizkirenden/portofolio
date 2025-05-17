import React from "react";
import { Card } from "../../atoms/card";
import Image from "next/image";
import { Subtitle } from "../../atoms/subtitle";
import { Button } from "../../atoms/button";
import { IoMdArrowRoundForward } from "react-icons/io";

const dataTeknologi = [
  {
    title: "REACT JS",
    image: "/images/reactjs.png",
    color: "text-[#62D9F6]",
    bgColor: "#62D9F6",
  },
  {
    title: "NEXT JS",
    image: "/images/nextjs.png",
    color: "text-[#000000]",
    bgColor: "#000000",
  },
  {
    title: "LARAVEL",
    image: "/images/Laravel.png",
    color: "text-[#FF2D20]",
    bgColor: "#FF2D20",
  },
  {
    title: "EXPRESS JS",
    image: "/images/express-js.png",
    color: "text-[#000000]",
    bgColor: "#000000",
  },
  {
    title: "POSTMAN",
    image: "/images/postman.png",
    color: "text-[#ED6D3E]",
    bgColor: "#ED6D3E",
  },
  {
    title: ["MY", "SQL"],
    image: "/images/mysql.png",
    color: ["text-[#00678C]", "text-[#CE8B2C]"],
    bgColor: "#00678C",
  },
  {
    title: "GIT",
    image: "/images/git.png",
    color: "text-[#F05033]",
    bgColor: "#F05033",
  },
  {
    title: "TAILWIND",
    image: "/images/tailwind.png",
    color: "text-[#38BDF8]",
    bgColor: "#38BDF8",
  },
];

const Cardteknologi = () => {
  return (
    <div className="relative">
      {/* Scrollable container */}
      <div className="px-4 md:px-0">
        <div className="flex space-x-6 md:space-x-5 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center hide-scrollbar">
          {dataTeknologi.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <CardItem
                title={item.title}
                image={item.image}
                color={item.color}
                bgColor={item.bgColor}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade effect for mobile */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1E1E1E] pointer-events-none md:hidden"></div>
    </div>
  );
};

interface CardItemProps {
  title: string | string[];
  image: string;
  color: string | string[];
  bgColor: string;
}

const CardItem = ({ title, image, color, bgColor }: CardItemProps) => {
  return (
    <Card
      rounded="rounded-lg"
      height="h-46 md:h-54"
      width="w-28 md:w-32"
      cardcolor="bg-white"
      className="relative p-3 md:p-4"
    >
      {/* Image */}
      <div className="relative w-full h-16 md:h-20 mb-3 md:mb-4">
        <Image
          src={image}
          alt={Array.isArray(title) ? title.join("") : title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 112px, 128px"
        />
      </div>

      {/* Title */}
      <div className="mb-3 md:mb-4 min-h-[40px] flex items-center justify-center">
        {Array.isArray(title) ? (
          <Subtitle className="text-xs md:text-sm text-center leading-tight">
            {title.map((part, i) => (
              <span key={i} className={color[i]}>
                {part}
              </span>
            ))}
          </Subtitle>
        ) : (
          <Subtitle className={`text-xs md:text-sm text-center ${color}`}>
            {title}
          </Subtitle>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Button
          className={`text-white w-20 md:w-24 h-8 md:h-9 flex items-center justify-center gap-1 md:gap-2 rounded-lg md:rounded-xl text-xs md:text-sm`}
          style={{ backgroundColor: bgColor }}
        >
          <span>Lihat</span>
          <IoMdArrowRoundForward size={14} className="md:size-4" />
        </Button>
      </div>
    </Card>
  );
};

export default Cardteknologi;
