import React from "react";
import { Dot } from "../../atoms/dot";
import { Divider } from "../../atoms/divider";
import { Title } from "../../atoms/title";
import { Subtitle } from "../../atoms/subtitle";

const Experience = () => {
  return (
    <div className="flex justify-center pt-1">
      <div className="max-w-xl w-full px-4">
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className="relative" style={{ width: 24, height: 24 }}>
              <Dot
                dotsize="w-6 h-6"
                dotcolor="bg-white"
                className="absolute top-0 left-0"
              />
              <Dot
                dotsize="w-3 h-3"
                dotcolor="bg-[#62D9F6]"
                className="absolute top-1.5 left-1.5 z-10"
              />
            </div>
            <Divider className="h-16 w-[2px] bg-white mt-1" />
          </div>
          <div className="flex flex-col">
            <Title textClass="text-white text-2xl font-normal">
              Full Stack Web Developer @Bank Sulteng
            </Title>
            <Subtitle className="text-[#C7C7C7]">
              Des 2023 - Jan 2024 | Palu, Indonesia - Magang
            </Subtitle>
            <Subtitle className="text-white">
              Melakukan kegiatan perbankan yang terbaik dengan mengutamakan
              pelayanan kepada segmen mikro, kecil, dan menengah untuk menunjang
              peningkatan ekonomi masyarakat. Saya melakukan pembuatan Web
              E-Monitoring Project pada Divisi IT
            </Subtitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
