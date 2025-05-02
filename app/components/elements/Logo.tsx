import React from "react";
import Image from "next/image";

// Definisikan props dengan destructuring untuk mendapatkan height dan width
export const Logo = ({ height = 20, width = 20 }) => {
  return (
    <Image
      src="/images/baverse.png"
      alt="Logo"
      height={height}
      width={width}
      className="responsive"
    />
  );
};

export default Logo;
