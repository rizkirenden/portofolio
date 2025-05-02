import React from "react";
import Image from "next/image";
export const Logo = (height, width) => {
  return (
    <Image
      src="/images/baverse.png"
      height={height}
      width={width}
      className="object-contain"
    />
  );
};

export default Logo;
