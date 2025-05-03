"use client";
import React from "react";
import { motion } from "framer-motion";

interface NameitemProps {
  name: string;
}

export const Name: React.FC<NameitemProps> = ({ name }) => {
  return (
    <motion.div
      className="text-center mt-4 md:mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-500">
        Frontend Developer React Js & FullStack Developer Laravel
      </p>
    </motion.div>
  );
};

export default Name;
