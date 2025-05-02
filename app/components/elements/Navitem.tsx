// components/elements/Navitem.tsx
import React from "react";
import Link from "next/link"; // Gunakan Link dari Next.js untuk navigasi

interface NavItemProps {
  label: string;
  href: string; // Menambahkan href untuk routing
}

export const Navitem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default Navitem;
