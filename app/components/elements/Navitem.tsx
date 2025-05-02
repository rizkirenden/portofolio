// components/elements/Navitem.tsx
import React from "react";

interface NavItemProps {
  label: string;
}

export const Navitem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <li>
      <a>{label}</a>
    </li>
  );
};

export default Navitem;
