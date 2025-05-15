import React from "react";

export const Button = ({
  children,
  className = "",
  href = "",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  const baseClass = `flex items-center rounded-md px-5 py-2 text-center text-sm ${className}`;

  return href ? (
    <a
      href={href}
      className={baseClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <button type="button" className={baseClass}>
      {children}
    </button>
  );
};
