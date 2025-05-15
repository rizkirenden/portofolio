import React from "react";
import { Card } from "../../atoms/card";
import { Subtitle } from "../../atoms/subtitle";
const Footer = () => {
  return (
    <Card
      height="h-8"
      width="mx-9"
      rounded="rounded-full"
      style={{ backgroundColor: "#62D9F6" }}
    >
      <div className="flex items-center mx-2 justify-between h-full px-4 text-white">
        <Subtitle>2025 © All Rights Reserved.</Subtitle>
        <Subtitle>Made under exhaustion and compulsion ♡</Subtitle>
      </div>
    </Card>
  );
};
export default Footer;
