import React from "react";
import { Card } from "../../atoms/card";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Bank BPR",
    image: "/images/modern_multiartha_logo.jpg",
    alt: "Logo Bank BPR",
    period: "Okt 2025 - Sekarang",
  },
  {
    id: 2,
    name: "Premier Motors",
    image: "/images/silver.PNG",
    alt: "Logo Premier Motors",
    period: "Mei 2025 - Sekarang",
  },
  {
    id: 3,
    name: "PT TriPutra",
    image: "/images/triputra.png",
    alt: "Logo PT TriPutra",
    period: "Nov 2025 - Sekarang",
  },
];

const CompanyCardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {companies.map((company) => (
        <Card
          key={company.id}
          rounded="rounded-2xl"
          height="h-64 md:h-72"
          width="w-56 md:w-64"
          cardcolor="bg-white shadow-lg border border-gray-200"
          className="overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col items-center"
        >
          {/* Container gambar */}
          <div className="relative w-full h-44 flex items-center justify-center bg-gray-50 overflow-hidden">
            <Image
              src={company.image}
              alt={company.alt}
              fill
              className="object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Nama perusahaan */}
          <h3 className="mt-4 text-center text-lg font-semibold text-gray-800">
            {company.name}
          </h3>

          {/* Durasi proyek */}
          <span className="mt-2 px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
            {company.period}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default CompanyCardList;
