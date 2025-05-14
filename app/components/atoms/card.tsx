import React from "react";

export const Card = ({
  children,
  cardsize = "md",
  cardcolor = "bg-white",
  height = "",
  width = "",
}: {
  children: React.ReactNode;
  cardsize?: string;
  cardcolor?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden ${cardsize} ${cardcolor} ${height} ${width}`}
    >
      {children}
    </div>
  );
};
