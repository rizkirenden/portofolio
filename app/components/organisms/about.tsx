import React from "react";
import Header from "../molecules/home/header";
import Footer from "../molecules/home/footer";
import Tittleabout from "../molecules/about/tittleabout";
import Subtittle from "../molecules/about/subtittle";
import Cardfotoabout from "../molecules/about/cardfotoabout";
import Cardteknologi from "../molecules/about/cardteknologi";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-8 py-4">
        <Header />
      </div>
      <div className="flex items-center py-6 ">
        <div className="flex items-center justify-center w-full max-w-6xl mx-auto">
          <Tittleabout>TENTANG SAYA</Tittleabout>
        </div>
      </div>
      <div className="flex items-center justify-between mx-22">
        <div className="w-2/3 flex-col">
          <Subtittle>
            Hai! Saya Moh. Rizki, seorang Software Engineer yang berdedikasi dan
            serbaguna dengan landasan yang kuat dalam pengembangan full-stack,
            khususnya di JavaScript, PHP, Node.js, React.js, Express.js,
            Laravel, dan teknologi web modern. Saya adalah lulusan Teknik
            Informatika dari Universitas Tadulako, dan alumni program bootcamp
            intensif di Harisenin, yang membantu saya memantapkan keterampilan
            praktis di dunia industri. Dengan semangat dalam membangun aplikasi
            yang berpusat pada pengguna, saya telah berhasil berkontribusi dalam
            pengembangan sistem monitoring proyek dan sistem administrasi
            service serta stok bengkel, serta mendorong peningkatan efisiensi
            alur kerja. Saat ini, saya sedang mencari peluang untuk memanfaatkan
            keterampilan saya dalam tim global berbasis teknologi yang berfokus
            pada solusi yang berdampak.
          </Subtittle>
          <div className="my-4 flex gap-20">
            <div className="flex flex-col">
              <Tittleabout>5+</Tittleabout>
              <Subtittle className="text-[#C7C7C7]">Project</Subtittle>
            </div>
            <div className="flex flex-col items-center">
              <Tittleabout>1+</Tittleabout>
              <Subtittle className="text-[#C7C7C7]">Years Experience</Subtittle>
            </div>
          </div>
        </div>
        <Cardfotoabout />
      </div>
      <div className="flex items-center py-6 ">
        <div className="flex items-center justify-center w-full max-w-6xl mx-auto">
          <Tittleabout>TEKNOLOGI</Tittleabout>
        </div>
      </div>
      <div className="py-6 flex items-center justify-center">
        <Cardteknologi />
      </div>
      <div className="flex items-center py-6 ">
        <div className="flex items-center justify-center w-full max-w-6xl mx-auto">
          <Tittleabout>EXPERIENCE</Tittleabout>
        </div>
      </div>
      <div className="py-6 flex items-center justify-center">
        <Cardteknologi />
      </div>
      <footer className="mt-auto mb-8">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
