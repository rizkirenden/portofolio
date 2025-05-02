import React from "react";
import Logo from "../elements/Logo";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white h-8 sm:h-10 md:h-10 lg:h-10 xl:h-10 mt-2 mx-4 rounded-full overflow-hidden px-4 ">
      <div className="flex items-center">
        <Logo height={30} width={30} />
      </div>
      <ul className="flex space-x-6 text-black text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
        <li>
          <a>Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
