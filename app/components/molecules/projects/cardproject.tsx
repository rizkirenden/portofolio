import React from "react";
import { Card } from "../../atoms/card";
import { Title } from "../../atoms/title";
import { Button } from "../../atoms/button";
import { Subtitle } from "../../atoms/subtitle";
import Image from "next/image";

const Cardproject = () => {
  const projectData = [
    {
      id: 1,
      image: "/images/project1.jpeg",
      tittle: "MechaTrack",
      description:
        "Membangun Sistem Administrasi Servis & situs web Stok Bengkel.",
      tech: ["Laravel", "NodeJs", "Tailwind"],
      alt: "PT Premier Motors",
      link: "https://ptpremiermotors.com",
    },
    {
      id: 2,
      image: "/images/project2.jpeg",
      tittle: "Chill Movie",
      description:
        "Platform streaming film sederhana yang menampilkan daftar film dan informasi detailnya.",
      tech: ["React Js", "Tailwind"],
      alt: "Chill Movie",
      link: "https://github.com/rizkirenden/front-end-4",
    },
    {
      id: 3,
      image: "/images/project3.jpg",
      tittle: "E Monitoring Project",
      description:
        "Aplikasi monitoring proyek yang memudahkan pelaporan progres pekerjaan secara online.",
      tech: ["PHP", "Bootstrap"],
      alt: "PT Bank Sulteng",
      link: "",
    },
    {
      id: 4,
      image: "/images/project4.jpeg",
      tittle: "Landing Page Undata",
      description:
        "Website landing page informatif untuk RSUD Undata sebagai media promosi dan informasi layanan.",
      tech: ["PHP", "Bootstrap"],
      alt: "RSUD Undata",
      link: "https://www.rsudundata.com",
    },
    {
      id: 5,
      image: "/images/project5.jpg",
      tittle: "Sistem Deteksi Kebakaran",
      description:
        "Aplikasi IoT untuk mendeteksi potensi kebakaran dan mengirim notifikasi ke pengguna.",
      tech: ["React Native", "Laravel", "IoT", "Tailwind"],
      alt: "Sistem Deteksi Kebakaran",
      link: "https://github.com/rizkirenden/skripsi",
    },
    {
      id: 6,
      image: "/images/project6.jpg",
      tittle: "Toko Roti",
      description:
        "Sistem kasir dan manajemen produk roti berbasis web dengan fitur penjualan dan stok.",
      tech: ["React Js", "Express Js", "Tailwind", "Zustand"],
      alt: "Toko Roti",
      link: "https://github.com/rizkirenden/toko",
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

              {/* Deskripsi project */}
              <Subtitle className="text-gray-300 text-sm md:text-base mt-1">
                {project.description}
              </Subtitle>

              {/* Teknologi dalam bentuk badge */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-gray-800 text-white text-xs px-3 py-1 rounded-full border border-gray-600"
                  >
                    <Image
                      src={`/images/${tech
                        .toLowerCase()
                        .replace(/\s+/g, "")}.png`}
                      alt={tech}
                      width={14}
                      height={14}
                      className="object-contain"
                    />

                    {tech}
                  </span>
                ))}
              </div>
              {/* link ke github */}
              {/* Link Project */}
              {project.link ? (
                <div className="mt-4 flex justify-center">
                  <Button
                    href={project.link}
                    target="_blank"
                    className="bg-white hover:bg-[#E5E0D8] text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    Link Project
                  </Button>
                </div>
              ) : (
                <div className="mt-4 flex justify-center">
                  <button
                    disabled
                    className="bg-gray-600 text-gray-300 font-semibold px-4 py-2 rounded-lg cursor-not-allowed"
                  >
                    Link Not Available
                  </button>
                </div>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cardproject;
