"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../atoms/button";
import { Subtitle } from "../../atoms/subtitle";
import { TbFileCv } from "react-icons/tb";

const BtnResume = () => {
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
        href="https://drive.google.com/file/d/1-Ld-zJOEjhyqA3XrUI8Gpoj2kc9AQLp4/view?usp=drive_link"
        className="bg-white hover:bg-white transition-all duration-300 shadow-lg hover:shadow-cyan-400/50 group rounded-full px-6 py-3"
      >
        <div className="flex items-center gap-3">
          <Subtitle className="text-black group-hover:animate-pulse">
            Cv
          </Subtitle>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <TbFileCv className="text-black text-lg" />
          </motion.div>
        </div>
      </Button>
    </motion.div>
  );
};

export default BtnResume;
