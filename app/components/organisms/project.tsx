import React from "react";
import Header from "../molecules/home/header";
import Cardproject from "../molecules/projects/cardproject";
import Tittleproject from "../molecules/projects/tittleproject";
import Footer from "../molecules/home/footer";
const Project = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-4 md:px-8 py-4">
        <Header />
      </div>
      <div className="max-w-6xl mx-auto text-center mb-4">
        <Tittleproject>PROJECTS</Tittleproject>
      </div>
      <Cardproject />;
      <footer className="mt-auto mb-4 md:mb-8 px-4 md:px-0 text-center">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Project;
