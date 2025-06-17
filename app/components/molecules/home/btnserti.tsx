"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../atoms/button";
import { Subtitle } from "../../atoms/subtitle";
import { GrCertificate } from "react-icons/gr";

const BtnSerti = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      viewport={{ once: true }}
    >
      <Button
        href="https://drive.google.com/file/d/1FswXreayqQn2mYgoaH0INt-4B0iV-05t/view?usp=sharing"
        className="bg-[#0672de] hover:bg-[#0672de]transition-all duration-300 shadow-lg hover:shadow-cyan-400/50 group rounded-full px-6 py-3"
      >
        <div className="flex items-center gap-3">
          <Subtitle className="text-white group-hover:animate-pulse">
            Sertifikat
          </Subtitle>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <GrCertificate className="text-white text-lg" />
          </motion.div>
        </div>
      </Button>
    </motion.div>
  );
};

export default BtnSerti;
