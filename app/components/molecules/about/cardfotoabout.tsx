import React from "react";
import { Card } from "../../atoms/card";
import Image from "next/image";

const Cardfotoabout = () => {
  return (
    <div className="relative w-full flex justify-center mb-8 md:mb-0 md:block md:w-auto">
      {/* Background circle */}
      <Card
        rounded="rounded-full"
        height="h-40 md:h-94"
        width="w-40 md:w-61"
        cardcolor="bg-[#975521]"
        className="absolute -top-1 left-25 md: md:left-1 z-0"
      >
        <></>
      </Card>

      {/* Profile photo */}
      <Card
        rounded="rounded-full"
        height="h-40 md:h-92"
        width="w-40 md:w-59"
        cardcolor="bg-white"
        className="relative"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/rizki.jpg"
            alt="Foto Rizki"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </Card>
    </div>
  );
};

export default Cardfotoabout;
