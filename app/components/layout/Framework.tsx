"use client";
import React, { useState } from "react";
import Saya from "../elements/Saya";
import { FrameworkData } from "../data/FrameworkData";

export const Framework = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    // Jika card yang sama diklik lagi, kembalikan ke keadaan semula
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const handleTouchStart = (index: number) => {
    // Menangani perubahan warna hanya saat touch di perangkat mobile
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 overflow-x-hidden">
      {/* Menambahkan efek degradasi warna berjalan pada teks */}
      <h1 className="text-3xl mt-20 font-semibold text-center mb-8 bg-gradient-to-r from-blue-500 via-red-500 to-black bg-clip-text text-transparent animate-gradient-background">
        KnowLegde
      </h1>{" "}
      <div className="flex items-center gap-2 mt-9 flex-wrap justify-center md:gap-10">
        {FrameworkData.map((image, index) => (
          <div
            key={index}
            className={`bg-white items-center flex justify-center h-50 skew-x-11 relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
            ${
              clickedIndex === index
                ? "bg-gradient-to-r from-transparent to-gray-600"
                : "bg-white"
            }`}
            onClick={() => handleCardClick(index)} // Menambahkan fungsi onClick untuk desktop
            onTouchStart={() => handleTouchStart(index)} // Menambahkan fungsi onTouchStart untuk mobile
          >
            {/* Efek Gradient */}
            <div
              className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                clickedIndex === index ? "translate-x-0" : "translate-x-[-100%]"
              }`}
            ></div>

            <Saya
              src={image.src}
              alt={image.alt}
              height={image.height}
              width={image.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Framework;
