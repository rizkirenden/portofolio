"use client";
import React, { useEffect, useState } from "react";
import { MdOutgoingMail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [
  {
    href: "mailto:rizkirenden@gmail.com",
    Icon: MdOutgoingMail,
    color: "text-white",
    size: "text-md",
  },
  {
    href: "https://github.com/rizkirenden",
    Icon: FaGithub,
    color: "text-white",
    size: "text-xl",
  },
  {
    href: "https://linkedin.com/in/rizki-renden",
    Icon: FaLinkedin,
    color: "text-white",
    size: "text-xl",
  },
  {
    href: "https://instagram.com/rizkirenden",
    Icon: FaInstagram,
    color: "text-white",
    size: "text-xl",
  },
];

export const Icons = ({ className = "" }: { className?: string }) => {
  const [hoverStates, setHoverStates] = useState<boolean[]>(
    new Array(icons.length).fill(false)
  );
  const [iconVariants, setIconVariants] = useState<any>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    const variants = {
      initial: { scale: 1, rotate: 0, y: 0 },
      hover: {
        scale: 1.2,
        rotate: 20,
        transition: { type: "spring", stiffness: 1000 },
      },
      tap: { scale: 0.9 },
      falling: {
        y: isMobile ? ["-120%", "120%"] : ["-100%", "110%"],
        rotate: [0, 360],
        transition: {
          duration: isMobile ? 4 : 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
      },
      rotateMobile: {}, // tidak dipakai tapi biar aman
    };

    setIconVariants(variants);
  }, []);

  const handleStart = (index: number) => {
    const newStates = [...hoverStates];
    newStates[index] = true;
    setHoverStates(newStates);
  };

  const handleEnd = (index: number) => {
    const newStates = [...hoverStates];
    newStates[index] = false;
    setHoverStates(newStates);
  };

  if (!iconVariants) return null; // jangan render sebelum variants siap

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {icons.map(({ href, Icon, color, size }, i) => (
        <motion.a
          key={i}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => handleStart(i)}
          onHoverEnd={() => handleEnd(i)}
          onTouchStart={() => handleStart(i)}
          onTouchEnd={() => handleEnd(i)}
          onTouchCancel={() => handleEnd(i)}
          animate={hoverStates[i] ? "initial" : "falling"}
          style={{ position: "relative", display: "inline-block" }}
        >
          <Icon className={`${color} ${size} transition-all duration-300`} />
        </motion.a>
      ))}
    </div>
  );
};
