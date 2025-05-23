import React from "react";

export const Title = ({
  children,
  textClass = "",
}: {
  textClass?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1
      className={`mb-4 font-extrabold leading-none tracking-tight ${textClass}`}
    >
      {children}
    </h1>
  );
};
