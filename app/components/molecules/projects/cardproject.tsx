import React from "react";
import { Card } from "../../atoms/card";
import { Title } from "../../atoms/title";
import { Subtitle } from "../../atoms/subtitle";
import Image from "next/image";

const Cardproject = () => {
  const projectData = [
    {
      id: 1,
      image: "/images/project1.jpeg",
      tittle: "MechaTrack",
      subtittle:
        "MechaTrack menggunakan teknologi PHP, Laravel, Node, Tailwind, Blade",
      alt: "PT Premier Motors",
    },
    {
      id: 2,
      image: "/images/project2.jpeg",
      tittle: "Chill Movie",
      subtittle:
        "Chill Movie menggunakan teknologi JavaScript, React.JS, Tailwind",
      alt: "Chill Movie",
    },
    {
      id: 3,
      image: "/images/project3.jpg",
      tittle: "E Monitoring Project",
      subtittle:
        "E Monitoring Project menggunakan teknologi PHP Native, Bootstrap",
      alt: "PT Bank Sulteng",
    },
    {
      id: 4,
      image: "/images/project4.jpeg",
      tittle: "Landing Page Undata",
      subtittle:
        "Landing Page Undata menggunakan teknologi PHP Native, Bootstrap",
      alt: "RSUD Undata",
    },
    {
      id: 5,
      image: "/images/project5.jpg",
      tittle: "Sistem Deteksi Kebakaran",
      subtittle:
        "Sistem deteksi kebakaran menggunakan teknologi React Native, Laravel, IoT, Tailwind",
      alt: "Sistem Deteksi Kebakaran",
    },
    {
      id: 6,
      image: "/images/project6.jpg",
      tittle: "Toko Roti",
      subtittle:
        "Toko Roti menggunakan teknologi React Js, Express Js, Tailwind, Suztand",
      alt: "Toko Roti",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 items-center justify-center px-4 md:px-0">
      {projectData.map((project) => (
        <div key={project.id} className="w-full sm:w-[400px]">
          <Card
            rounded="rounded-lg"
            width="w-full"
            cardcolor="bg-black"
            className="overflow-hidden border-2 border-white"
          >
            {/* Gambar di atas */}
            <div className="relative w-full h-[180px]">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Konten teks di bawah */}
            <div className="p-4">
              <Title textClass="text-white text-lg md:text-xl font-semibold">
                {project.tittle}
              </Title>
              <Subtitle className="text-white text-sm md:text-base mt-2 leading-snug">
                {project.subtittle}
              </Subtitle>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cardproject;
