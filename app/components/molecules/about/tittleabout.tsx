import React from "react";
import { Title } from "../../atoms/title";
const Tittleabout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Title textClass="text-4xl text-white"> {children}</Title>
    </div>
  );
};

export default Tittleabout;
