import React from "react";
import Header from "../molecules/home/header";
import Tittlehome from "../molecules/home/tittlehome";
import Cardfotohome from "../molecules/home/cardfotohome";
import Btnresume from "../molecules/home/btnresume";
import Btncontacme from "../molecules/home/btncontacme";
import BtnMotivation from "../molecules/home/btnmotivation";
import Footer from "../molecules/home/footer";
import BtnContent from "../molecules/home/btncontent";
import BtnSerti from "../molecules/home/btnserti";
import BtnCreative from "../molecules/home/btncvcreative";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-4 md:px-8 py-4">
        <Header />
      </div>
      <div className="flex-1 flex items-center px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 md:gap-0">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Tittlehome />
            <div className="px-4 md:px-0">
              <div className="grid grid-cols-2 gap-3 pt-4 w-full max-w-md mx-auto md:flex md:flex-row md:justify-start md:gap-4 md:max-w-none md:mx-0">
                <Btnresume />
                <BtnCreative />
                <Btncontacme />
                <BtnMotivation />
                <BtnContent />
                <BtnSerti />
              </div>
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
