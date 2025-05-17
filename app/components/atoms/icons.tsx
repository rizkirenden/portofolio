"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      controls.start({
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    } else {
      controls.start("animate");
    }
  }, [controls]);

  const iconVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.2 },
  };

  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  const iconList = [
    {
      href: "mailto:rizkirenden@gmail.com",
      icon: <MdOutgoingMail className={`${mailColor} ${mailSize}`} />,
    },
    {
      href: "https://github.com/rizkirenden",
      icon: <FaGithub className="text-white text-xl" />,
    },
    {
      href: "https://linkedin.com/in/rizki-renden",
      icon: <FaLinkedin className="text-white text-xl" />,
    },
    {
      href: "https://instagram.com/rizkirenden",
      icon: <FaInstagram className="text-white text-xl" />,
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {iconList.map(({ href, icon }, i) => (
        <motion.a
          key={i}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          variants={iconVariants}
          initial="initial"
          animate={controls}
          whileHover="hover"
          transition={transition}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
};
