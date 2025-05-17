import React from "react";
import Header from "../molecules/home/header";
import Cardproject from "../molecules/projects/cardproject";
const Project = () => {
  return (
    <div>
      <div className="px-4 md:px-8 py-4">
        <Header />
      </div>
      <Cardproject />;
    </div>
  );
};

export default Project;
