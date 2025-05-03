"use client";
import React from "react";
import Name from "../elements/Name";
import Saya from "../elements/Saya";

export const Card = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-black to-white px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 transition-all">
        <Saya src="/images/rizki.jpg" alt="rizki" height={200} width={200} />
        <Name name="Moh. Rizki" />
      </div>
    </div>
  );
};

export default Card;
