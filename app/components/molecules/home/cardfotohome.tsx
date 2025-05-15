import React from "react";
import { Card } from "../../atoms/card";
import Image from "next/image";

const Cardfotohome = () => {
  return (
    <div className="relative">
      <Card
        rounded="rounded-lg"
        height="h-78"
        width="w-61"
        cardcolor="bg-[#393737]"
        className="absolute top-1 left-1 z-0"
      >
        <></>
      </Card>
      <Card
        rounded="rounded-lg"
        height="h-76"
        width="w-59"
        cardcolor="bg-white"
        className="relative z-10 overflow-visible"
      >
        <div className="relative w-59 h-96 absolute -top-20 left-1/2 -translate-x-1/2">
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
