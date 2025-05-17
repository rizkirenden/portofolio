import React from "react";

export const Dot = ({
  dotsize = "w-4 h-4",
  dotcolor = "bg-white",
  className = "",
}: {
  dotsize?: string;
  dotcolor?: string;
  className?: string;
}) => {
  return (
    <div className={`rounded-full ${dotsize} ${dotcolor} ${className}`}></div>
  );
};
