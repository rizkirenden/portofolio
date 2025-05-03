// components/Framework.tsx
import React from "react";
import Saya from "../elements/Saya";
import { FrameworkData } from "../data/FrameworkData";

export const Framework = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-6 flex-wrap h-10 m-0 p-5 transform rotate-[-10deg] skew-y-[10deg]">
        {FrameworkData.map((image, index) => (
          <Saya
            key={index}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>
    </div>
  );
};

export default Framework;
