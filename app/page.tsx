import React from "react";
import Btnresume from "./components/molecules/btnresume";
import Btncontacme from "./components/molecules/btncontacme";
import Tittlehome from "./components/molecules/tittlehome";
import Cardfotohome from "./components/molecules/cardfotohome";
export default function Home() {
  return (
    <div>
      <Btnresume />
      <Btncontacme />
      <Tittlehome />
      <Cardfotohome />
    </div>
  );
}
