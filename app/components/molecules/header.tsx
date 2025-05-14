import React from "react";
import { Namenav } from "../atoms/namenav";
import { Icons } from "../atoms/icons";
const Header = () => {
  return (
    <div className="flex items-center justify-between px-6">
      <Namenav />
      <Icons />
    </div>
  );
};

export default Header;
