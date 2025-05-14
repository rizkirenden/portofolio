import React from "react";

export const Card = ({
  children,
  cardsize = "md",
  cardcolor = "bg-white",
  height = "",
  width = "",
  style = {},
  rounded = "rounded-md",
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  cardsize?: string;
  cardcolor?: string;
  height?: string;
  width?: string;
  rounded?: string;
}) => {
  return (
    <div
      className={`${rounded} shadow-lg overflow-hidden ${cardsize} ${cardcolor} ${height} ${width}`}
      style={style}
    >
      {children}
    </div>
  );
};
