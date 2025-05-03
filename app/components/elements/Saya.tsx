"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SayaProps {
  height?: number;
  width?: number;
  src: string;
  alt: string;
}

const Saya: React.FC<SayaProps> = ({ height = 200, width = 200, src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className="object-cover rounded-xl"
      />
    </motion.div>
  );
};

export default Saya;
