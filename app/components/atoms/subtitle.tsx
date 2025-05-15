import React from "react";

export const Subtitle = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: string;
}) => {
  return (
    <p className={`text-sm font-normal ${className} ${style}`}>{children}</p>
  );
};
