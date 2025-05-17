"use client";
import React from "react";
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
    <div className={`flex items-center gap-5 ${className}`}>
      <motion.a
        href="mailto:rizkirenden@gmail.com"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <MdOutgoingMail
          className={`${mailColor} ${mailSize} transition-all duration-300`}
        />
      </motion.a>

      <motion.a
        href="https://github.com/rizkirenden"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaGithub className="text-white text-xl" />
      </motion.a>

      <motion.a
        href="https://linkedin.com/in/rizki-renden"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaLinkedin className="text-white text-xl" />
      </motion.a>

      <motion.a
        href="https://instagram.com/rizkirenden"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaInstagram className="text-white text-xl" />
      </motion.a>
    </div>
  );
};
