// components/Loading.tsx
"use client";

import React, { useEffect, useState } from "react";

export const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2">
        <span className="w-3 h-3 rounded-full animate-bounce bg-[#CE8B2C] [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 rounded-full animate-bounce bg-[#00678C] [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 rounded-full animate-bounce bg-[#62D9F6]"></span>
      </div>
    </div>
  );
};
