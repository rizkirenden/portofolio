import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Icons = ({
  className = "",
  mailColor = "text-white",
  mailSize = "text-md",
}: {
  className?: string;
  mailColor?: string;
  mailSize?: string;
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href="rizkirenden@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdOutgoingMail className={`${mailColor} ${mailSize}`} />
      </a>
      <a
        href="https://github.com/rizkirenden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-white text-xl" />
      </a>
      <a
        href="https://linkedin.com/in/rizki-renden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-white text-xl" />
      </a>
      <a
        href="https://instagram.com/rizkirenden"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white text-xl" />
      </a>
    </div>
  );
};
