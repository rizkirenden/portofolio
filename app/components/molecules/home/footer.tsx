import React from "react";
import { Card } from "../../atoms/card";
import { Subtitle } from "../../atoms/subtitle";
const Footer = () => {
  return (
    <Card
      height="h-10"
      width="w-full"
      rounded="rounded-full"
      style={{ backgroundColor: "#62D9F6" }}
    >
      <div className="flex flex-row items-center justify-center h-full px-4 py-2 text-white text-center gap-2 flex-wrap">
        <Subtitle className="text-xs md:text-sm">
          Made under exhaustion and compulsion ♡
        </Subtitle>
      </div>
    </Card>
  );
};

export default Footer;
