import React from "react";
import Header from "../molecules/home/header";
import Footer from "../molecules/home/footer";
import Tittleabout from "../molecules/about/tittleabout";
import Subtittle from "../molecules/about/subtittle";
import Cardfotoabout from "../molecules/about/cardfotoabout";
import Cardteknologi from "../molecules/about/cardteknologi";
import Experience from "../molecules/about/experience";
import Education from "../molecules/about/education";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 md:px-8">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8">
        {/* Title Section */}
        <section className="py-6">
          <div className="max-w-6xl mx-auto text-center">
            <Tittleabout>ABOUT ME</Tittleabout>
          </div>
        </section>

        {/* Profile Section - Mobile First */}
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center md:gap-12">
            {/* Profile Photo - Top on Mobile, Right on Desktop */}
            <div className="w-full flex justify-center md:w-auto md:order-2">
              <Cardfotoabout />
            </div>

            {/* Profile Text */}
            <div className="w-full md:w-2/3 md:order-1 text-center md:text-left">
              <Subtittle>
                Hi! I’m <span className="text-[#62D9F6]">MOH. RIZKI</span>, a
                dedicated and versatile Software Engineer with a strong
                foundation in full-stack development, specializing in
                JavaScript, PHP, Node.js, React.js, Express.js, Laravel, and
                modern web technologies. I hold a Bachelor’s degree in Computer
                Science from Tadulako University and am a graduate of an
                intensive Full Stack Developer bootcamp at Harisenin, which
                strengthened my practical, industry-ready skills. Passionate
                about building user-centered applications, I have contributed to
                the development of a project monitoring system and a service
                administration & workshop inventory system, helping to enhance
                workflow efficiency. I am now seeking opportunities to leverage
                my skills in a global tech-driven team focused on delivering
                impactful solutions.
              </Subtittle>

              {/* Stats */}
              <div className="mt-6 flex gap-12 text-center justify-center md:justify-start gap-20">
                <div className="flex flex-col">
                  <Tittleabout>5+</Tittleabout>
                  <Subtittle className="text-[#C7C7C7]">
                    Project Complete
                  </Subtittle>
                </div>
                <div className="flex flex-col">
                  <Tittleabout>1+</Tittleabout>
                  <Subtittle className="text-[#C7C7C7]">
                    Years Experience
                  </Subtittle>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-12 md:mb-16">
          <div className="max-w-6xl mx-auto mb-6 text-center">
            <Tittleabout>TECHNOLOGY</Tittleabout>
          </div>
          <div className="w-full">
            <Cardteknologi />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12 md:mb-16">
          <div className="max-w-6xl mx-auto mb-6 text-center">
            <Tittleabout>EXPERIENCE</Tittleabout>
          </div>
          <div className="max-w-2xl mx-auto">
            <Experience />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 md:mb-24">
          <div className="max-w-6xl mx-auto mb-6 text-center">
            <Tittleabout>EDUCATION</Tittleabout>
          </div>
          <div className="max-w-2xl mx-auto">
            <Education />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto mb-4 md:mb-8 px-4 md:px-0 text-center">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default About;
