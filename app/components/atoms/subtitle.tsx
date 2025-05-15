import React from "react";

export const Subtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-sm font-normal ${className}`}>{children}</p>;
};
