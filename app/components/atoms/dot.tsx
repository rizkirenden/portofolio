import React from "react";

export const Dot = ({
  dotsize = "w-4 h-4",
  dotcolor = "bg-white",
}: {
  dotsize?: string;
  dotcolor?: string;
}) => {
  return <div className={`rounded-full ${dotsize} ${dotcolor}`}></div>;
};
