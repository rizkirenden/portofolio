import React from "react";
import Btnresume from "./components/molecules/btnresume";
import Btncontacme from "./components/molecules/btncontacme";
import Tittlehome from "./components/molecules/tittlehome";

export default function Home() {
  return (
    <div>
      <Btnresume />
      <Btncontacme />
      <Tittlehome />
    </div>
  );
}
