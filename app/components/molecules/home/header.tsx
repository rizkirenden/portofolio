import React from "react";
import { Namenav } from "../../atoms/namenav";
import { Icons } from "../../atoms/icons";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      <Namenav />
      <Icons mailSize="text-xl" />
    </div>
  );
};

export default Header;
