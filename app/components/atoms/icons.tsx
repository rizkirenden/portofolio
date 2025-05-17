"use client";
import React, { useState } from "react";
import { MdOutgoingMail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 20,
    transition: { type: "spring", stiffness: 1000 },
  },
  tap: { scale: 0.9 },
};

const fallingAnimation = {
  y: ["-100%", "110%"],
  rotate: [0, 360],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear",
  },
};

export const Icons = ({
  className = "",
  mailColor = "text-white",
  mailSize = "text-md",
}: {
  className?: string;
  mailColor?: string;
  mailSize?: string;
}) => {
  // state untuk tracking hover tiap icon, bisa pakai index juga kalau perlu per icon beda
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {[
        {
          href: "mailto:rizkirenden@gmail.com",
          Icon: MdOutgoingMail,
          mailSize,
          mailColor,
        },
        {
          href: "https://github.com/rizkirenden",
          Icon: FaGithub,
          mailSize: "text-xl",
          mailColor: "text-white",
        },
        {
          href: "https://linkedin.com/in/rizki-renden",
          Icon: FaLinkedin,
          mailSize: "text-xl",
          mailColor: "text-white",
        },
        {
          href: "https://instagram.com/rizkirenden",
          Icon: FaInstagram,
          mailSize: "text-xl",
          mailColor: "text-white",
        },
      ].map(({ href, Icon, mailSize, mailColor }, i) => (
        <motion.a
          key={i}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={isHovered ? "initial" : fallingAnimation}
          style={{ position: "relative", display: "inline-block" }}
        >
          <Icon
            className={`${mailColor} ${mailSize} transition-all duration-300`}
          />
        </motion.a>
      ))}
    </div>
  );
};
