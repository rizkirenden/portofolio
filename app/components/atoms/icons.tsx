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
      <MdOutgoingMail className={`${mailColor} ${mailSize}`} />
      <FaGithub className="text-white text-md" />
      <FaLinkedin className="text-white text-md" />
      <FaInstagram className="text-white text-md" />
    </div>
  );
};
