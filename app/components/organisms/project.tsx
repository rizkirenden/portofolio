import React from "react";
import Header from "../molecules/home/header";
import Cardproject from "../molecules/projects/cardproject";
import Tittleproject from "../molecules/projects/tittleproject";
const Project = () => {
  return (
    <div>
      <div className="px-4 md:px-8 py-4">
        <Header />
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <Tittleproject>PROJECTS</Tittleproject>
      </div>
      <Cardproject />;
    </div>
  );
};

export default Project;
