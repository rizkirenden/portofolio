import React from "react";
import { Button } from "../../atoms/button";
import { Subtitle } from "../../atoms/subtitle";
import { MdOutgoingMail } from "react-icons/md";
const Btncontacme = () => {
  return (
    <Button href="mailto:rizkirenden@gmail.com" className="bg-[#62D9F6]">
      <div className="flex items-center gap-2">
        <Subtitle className="text-white">Contact Me</Subtitle>
        <MdOutgoingMail className="text-white" />
      </div>
    </Button>
  );
};
export default Btncontacme;
