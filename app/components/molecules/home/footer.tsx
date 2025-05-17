"use client";

import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Card } from "../../atoms/card";
import { Subtitle } from "../../atoms/subtitle";

const textColors = ["#000000", "#FFD700", "#FF69B4", "#00FFFF", "#FFA500"];

const Footer = () => {
  const textControl = useAnimationControls();

  React.useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % textColors.length;
      textControl.start({
        color: textColors[index],
        transition: { duration: 2, ease: "easeInOut" },
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [textControl]);

  return (
    <Card
      height="h-10"
      width="w-full"
      rounded="rounded-full"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="flex flex-row items-center justify-center h-full px-4 py-2 text-center gap-2 flex-wrap">
        <motion.div animate={textControl}>
          <Subtitle className="text-xs md:text-sm">
            Made under exhaustion and compulsion ♡
          </Subtitle>
        </motion.div>
      </div>
    </Card>
  );
};

export default Footer;
