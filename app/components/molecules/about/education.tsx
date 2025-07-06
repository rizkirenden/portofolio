import React from "react";
import { Dot } from "../../atoms/dot";
import { Divider } from "../../atoms/divider";
import { Subtitle } from "../../atoms/subtitle";

interface EducationItemProps {
  title: string | string[];
  subtitle: string;
  gpa: string | string[];
  showLine: boolean;
}

const EducationItem = ({
  title,
  subtitle,
  gpa,
  showLine,
}: EducationItemProps) => {
  // Fungsi untuk mewarnai bagian setelah "@"
  const renderTitle = (title: string | string[]) => {
    if (typeof title === "string") {
      const parts = title.split("@");
      return (
        <h3 className="text-white text-2xl font-normal">
          {parts[0]}
          {parts[1] && <span className="text-[#62D9F6]">@{parts[1]}</span>}
        </h3>
      );
    }

    return title.map((t, i) => <div key={i}>{renderTitle(t)}</div>);
  };

  return (
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
        {showLine && <Divider className="h-16 w-[2px] bg-white mt-1" />}
      </div>
      <div className="flex flex-col">
        {renderTitle(title)}
        <Subtitle className="text-[#C7C7C7]">{subtitle}</Subtitle>
        <Subtitle className="text-white">{gpa}</Subtitle>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="flex justify-center pt-1">
      <div className="max-w-xl w-full px-4 flex flex-col space-y-8">
        <EducationItem
          title="Teknik Informatika @Universitas Tadulako"
          subtitle="Sep 2020 - Jan 2025 | Palu, Indonesia"
          gpa="GPA : 3.46"
          showLine={true}
        />
        <EducationItem
          title="Full Stack Web Developer @Hari Senin"
          subtitle="Mar 2025 - May 2025"
          gpa="Lulusan Full Stack Web Developer Bootcamp Program from Hari Senin. Skill yang dipelajari: HTML, CSS, JavaScript, React.js, Express.js, MySQL"
          showLine={true}
        />
      </div>
    </div>
  );
};

export default Education;
