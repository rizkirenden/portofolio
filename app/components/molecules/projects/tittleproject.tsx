import React from "react";
import { Title } from "../../atoms/title";

const Tittleproject = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Title textClass="text-2xl md:text-3xl text-white font-semibold">
        {children}
      </Title>
    </div>
  );
};

export default Tittleproject;
