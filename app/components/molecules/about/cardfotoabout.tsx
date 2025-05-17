"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../atoms/card";
import Image from "next/image";

const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
  },
  hover: { scale: 1.05, boxShadow: "0 15px 30px rgba(151, 85, 33, 0.6)" },
};

const Cardfotoabout = () => {
  return (
    <div className="relative w-full flex justify-center mb-8 md:mb-0 md:block md:w-auto">
      {/* Background circle */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute -top-1 left-25 md:left-1 z-0"
      >
        <Card
          rounded="rounded-full"
          height="h-40 md:h-94"
          width="w-40 md:w-61"
          cardcolor="bg-[#975521]"
        >
          <></>
        </Card>
      </motion.div>

      {/* Profile photo */}
      <motion.div
        variants={photoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative cursor-pointer rounded-full"
      >
        <Card
          rounded="rounded-full"
          height="h-40 md:h-92"
          width="w-40 md:w-59"
          cardcolor="bg-white"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/rizki.jpg"
              alt="Foto Rizki"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Cardfotoabout;
