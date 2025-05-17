import React from "react";
import { Subtitle } from "../../atoms/subtitle";
import { Title } from "../../atoms/title";

const Tittlehome = () => {
  return (
    <div className="text-center md:text-left">
      <Title textClass="text-3xl md:text-4xl text-white">
        FullStack Web Developer
      </Title>
      <Subtitle className="text-white text-sm md:text-base mt-2">
        Graduated from the Full-Stack Web Developer bootcamp at harisenin.com,
        where I honed my skills to craft innovative and user-centric web
        applications. Explore my latest projects, where I bring ideas to life
        through code.
      </Subtitle>
    </div>
  );
};

export default Tittlehome;
