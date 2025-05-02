import React from "react";
import Logo from "../elements/Logo";
import Navitem from "../elements/Navitem";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white h-8 sm:h-10 md:h-10 lg:h-10 xl:h-10 overflow-hidden ">
      <div className="flex items-center">
        <Logo height={60} width={60} />
      </div>
      <ul className="flex space-x-4 sm:space-x-5 md:space-x-6 xl:space-x-6 text-black text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm mr-4">
        <Navitem label="Me" href="/" />
        <Navitem label="Study" href="/" />
      </ul>
    </nav>
  );
};

export default Navbar;
