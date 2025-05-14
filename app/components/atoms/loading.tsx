import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="w-3 h-3 rounded-full animate-bounce bg-[#CE8B2C] [animation-delay:-0.3s]"></span>
      <span className="w-3 h-3 rounded-full animate-bounce bg-[#00678C] [animation-delay:-0.15s]"></span>
      <span className="w-3 h-3 rounded-full animate-bounce bg-[#62D9F6]"></span>
    </div>
  );
};
