"use client";
import React, { useEffect, useRef, useState } from "react";

export const Divider = ({ className = "" }: { className?: string }) => {
  const [height, setHeight] = useState(60);
  const MIN_HEIGHT = 60;
  const MAX_HEIGHT = 160;
  const lastScrollY = useRef(0);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!dividerRef.current) return;

      // Dapatkan posisi elemen terhadap viewport
      const rect = dividerRef.current.getBoundingClientRect();
      const middleOfViewport = window.innerHeight / 2;

      // Kalau elemen belum sampai tengah layar, tetap height minimal
      if (rect.top > middleOfViewport) {
        setHeight(MIN_HEIGHT);
        lastScrollY.current = window.scrollY;
        return;
      }

      // Kalau sudah lewat tengah, cek arah scroll
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Ubah tinggi berdasarkan arah scroll
      setHeight((prevHeight) => {
        if (scrollingDown) {
          return Math.min(prevHeight + 10, MAX_HEIGHT);
        } else {
          return Math.max(prevHeight - 10, MIN_HEIGHT);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    lastScrollY.current = window.scrollY;

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={dividerRef}
      className={`w-px bg-white transition-all duration-200 ease-out ${className}`}
      style={{ height: `${height}px` }}
    />
  );
};
