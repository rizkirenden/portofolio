import React from "react";
import { Card } from "../../atoms/card";
import Image from "next/image";
const cardfotoabout = () => {
  return (
    <div className="relative">
      <Card
        rounded="rounded-full"
        height="h-94"
        width="w-61"
        cardcolor="bg-[#975521]"
        className="absolute -top-1 left-1 z-0"
      >
        <></>
      </Card>
      <Card
        rounded="rounded-full"
        height="h-92"
        width="w-59"
        cardcolor="bg-white"
        className="relative "
      >
        <div className="relative w-59 h-96 ">
          <Image
            src="/images/rizki.jpg"
            alt="Foto Rizki"
            fill
            className="object-cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default cardfotoabout;
