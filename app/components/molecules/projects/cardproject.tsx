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
        "MechaTrack menggunakan teknologi PHP,Laravel, Node, Tailwind, Blade",
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
      tittle: "Sistem deteksi Kebakaran",
      subtittle:
        "Sistem deteksi kebakaran menggunakan teknologi React Native, Laravel, Internet Of Things (Iot), Tailwind",
      alt: "Sistem Deteksi Kebakran",
    },
    // Tambah data lain sesuai kebutuhan
  ];

  return (
    <div className="flex flex-wrap gap-6 items-center justify-center px-4 md:px-0">
      {projectData.map((project) => (
        <div key={project.id} className="relative w-full sm:w-[400px]">
          {/* Card background */}
          <Card
            rounded="rounded-lg"
            height="h-[200px] md:h-[220px]"
            width="w-full"
            cardcolor="bg-white"
            className="absolute top-1 left-4 z-0"
          >
            <></>
          </Card>

          {/* Card content */}
          <Card
            rounded="rounded-lg"
            height="h-[200px] md:h-[220px]"
            width="w-full"
            cardcolor="bg-black"
            className="relative z-10 overflow-hidden mx-auto border-2 border-white"
          >
            <div className="flex items-center h-full">
              <div className="w-1/3 h-full relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <Title textClass="text-white text-lg md:text-xl">
                  {project.tittle}
                </Title>
                <Subtitle className="text-white text-sm md:text-base mt-2">
                  {project.subtittle}
                </Subtitle>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cardproject;
