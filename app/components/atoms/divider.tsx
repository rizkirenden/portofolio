"use client";
import React, { useEffect, useState } from "react";

export const Divider = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-px bg-white transition-all duration-300"
      style={{ height: `${height}px` }}
    />
  );
};
