import React from "react";
import { Button } from "../atoms/button";
import { Subtitle } from "../atoms/subtitle";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Btnresume = () => {
  return (
    <Button className="bg-white">
      <div className="flex items-center gap-2">
        <Subtitle className="text-black">Resume</Subtitle>
        <IoCloudDownloadOutline />
      </div>
    </Button>
  );
};
export default Btnresume;
