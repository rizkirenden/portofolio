import React from "react";

export const Card = ({
  children,
  cardsize = "",
  cardcolor = "",
  height = "",
  width = "",
  style = {},
  rounded = "",
  className = "",
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  cardsize?: string;
  cardcolor?: string;
  height?: string;
  width?: string;
  rounded?: string;
  className?: string;
}) => {
  return (
    <div
      className={`${rounded} shadow-lg overflow-hidden ${cardsize} ${cardcolor} ${height} ${width} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
