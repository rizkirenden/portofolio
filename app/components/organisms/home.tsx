import React from "react";
import Header from "../molecules/home/header";
import Tittlehome from "../molecules/home/tittlehome";
import Cardfotohome from "../molecules/home/cardfotohome";
import Btnresume from "../molecules/home/btnresume";
import Btncontacme from "../molecules/home/btncontacme";
import Footer from "../molecules/home/footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-4 md:px-8 py-4">
        <Header />
      </div>
      <div className="flex-1 flex items-center px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 md:gap-0">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Tittlehome />
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <Btnresume />
              <Btncontacme />
            </div>
          </div>
          <div className="w-full md:w-auto order-1 md:order-2 md:mr-16">
            <Cardfotohome />
          </div>
        </div>
      </div>
      <footer className="mt-auto mb-4 md:mb-8 px-4 md:px-0 text-center">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Home;
