import React from "react";
import { Card } from "../../atoms/card";
import { Subtitle } from "../../atoms/subtitle";

const Footer = () => {
  return (
    <Card
      height="h-12 md:h-8"
      width="w-full md:mx-9"
      rounded="rounded-lg md:rounded-full"
      style={{ backgroundColor: "#62D9F6" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 py-2 md:py-0 text-white text-center md:text-left">
        <Subtitle className="text-xs md:text-sm">
          2025 © All Rights Reserved.
        </Subtitle>
        <Subtitle className="text-xs md:text-sm">
          Made under exhaustion and compulsion ♡
        </Subtitle>
      </div>
    </Card>
  );
};

export default Footer;
