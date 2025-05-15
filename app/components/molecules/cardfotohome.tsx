import React from "react";
import { Card } from "../atoms/card";
import Image from "next/image";

const Cardfotohome = () => {
  return (
    <div className="relative">
      {/* Card bayangan (background) */}
      <Card
        rounded="rounded-lg"
        height="h-67"
        width="w-52"
        cardcolor="bg-[#393737]"
        className="absolute top-1 left-1 z-0"
      >
        <></>
      </Card>

      {/* Card utama */}
      <Card
        rounded="rounded-lg"
        height="h-66"
        width="w-50"
        cardcolor="bg-white"
        className="relative z-10 overflow-visible"
      >
        <div className="relative w-54 h-82 absolute -top-16 left-1/2 -translate-x-1/2">
          <Image
            src="/images/rizkihome.png"
            alt="Foto Rizki"
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default Cardfotohome;
