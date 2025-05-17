import React from "react";
import { Card } from "../../atoms/card";
import Image from "next/image";

const Cardfotohome = () => {
  return (
    <div className="relative w-full md:w-auto">
      <Card
        rounded="rounded-lg"
        height="h-64 md:h-78"
        width="w-48 md:w-61"
        cardcolor="bg-[#393737]"
        className="absolute top-1 left-17 md:left-1 z-0"
      >
        <></>
      </Card>
      <Card
        rounded="rounded-lg"
        height="h-60 md:h-76"
        width="w-44 md:w-59"
        cardcolor="bg-white"
        className="relative z-10 overflow-visible mx-auto md:mx-0"
      >
        <div className="relative w-full h-76 md:h-96 absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2">
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
