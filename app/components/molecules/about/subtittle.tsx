import React from "react";
import { Subtitle } from "../../atoms/subtitle";
const Subtittle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <Subtitle className={`text-white ${className}`}>{children}</Subtitle>
    </div>
  );
};

export default Subtittle;
