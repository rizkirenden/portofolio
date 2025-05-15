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
      <div className="px-8 py-4">
        <Header />
      </div>
      <div className="flex-1 flex items-center px-8 py-8">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          <div className="w-1/2">
            <Tittlehome />
            <div className="flex items-center gap-4 pt-4">
              <Btnresume />
              <Btncontacme />
            </div>
          </div>
          <div className="mr-16">
            <Cardfotohome />
          </div>
        </div>
      </div>
      <footer className="mt-auto mb-8">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
