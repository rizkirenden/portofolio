import React from "react";

export const Button = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      type="button"
      className={`flex items-center rounded-md px-5 py-2 text-center text-sm ${className}`}
    >
      {children}
    </button>
  );
};
