"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../atoms/card";
import Image from "next/image";
import { Subtitle } from "../../atoms/subtitle";

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
    image: "/images/laravel.png",
    color: "text-[#FF2D20]",
    bgColor: "#FF2D20",
  },
  {
    title: "EXPRESS JS",
    image: "/images/ExpressJs.png",
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
    title: "JIRA",
    image: "/images/jira.png",
    color: "text-[#126BE7]",
    bgColor: "#126BE7",
  },
  {
    title: ["S", "L", "A", "C", "K"],
    image: "/images/slack.png",
    color: [
      "text-[#ECB22E]",
      "text-[#36C5f0]",
      "text-[#2EB67D]",
      "text-[#E01E5A]",
      "text-[#ECB22E]",
    ],
    bgColor: "#126BE7",
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
  {
    title: "MICROSOFT OFFICE",
    image: "/images/office.png",
    color: "text-[#F05033]",
    bgColor: "#F05033",
  },
];

const scrollDuration = 40; // durasi animasi berjalan dalam detik, bisa kamu ubah

const Cardteknologi = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex space-x-6 md:space-x-5 pb-4"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollDuration,
          ease: "linear",
        }}
      >
        {[...dataTeknologi, ...dataTeknologi].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <CardItem
              title={item.title}
              image={item.image}
              color={item.color}
              bgColor={item.bgColor}
            />
          </div>
        ))}
      </motion.div>

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

const CardItem = ({ title, image, color }: CardItemProps) => {
  return (
    <Card
      rounded="rounded-lg"
      height="h-36 md:h-40"
      width="w-28 md:w-32"
      cardcolor="bg-white"
      className="relative p-3 md:p-4"
    >
      <div className="relative w-full h-16 md:h-20 mb-3 md:mb-4 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={Array.isArray(title) ? title.join("") : title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 112px, 128px"
          draggable={false}
        />
      </div>

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
    </Card>
  );
};

export default Cardteknologi;
