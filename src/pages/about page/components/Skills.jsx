import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = ({ label, percentage }) => (
  <div className="w-24 sm:w-28 md:w-32 lg:w-36 m-3 sm:m-5 text-center">
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        pathColor: "orange",
        textColor: "#444",
        trailColor: "#eee",
      })}
    />
    <p className="mt-2 text-xs sm:text-sm md:text-base font-medium">{label}</p>
  </div>
);

const App = () => {
  const skills = [
    { label: "HTML", percentage: 100 },
    { label: "JAVASCRIPT", percentage: 89 },
    { label: "CSS", percentage: 90 },
    { label: "REACT", percentage: 95 },
    { label: "Photoshop", percentage: 100 },
    { label: "Illustrator", percentage: 90 },
  ];

  return (
    <div className="w-11/12 max-w-8xl mx-auto py-10 px-4">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center text-[#ffb400] font-semibold">
          MY <span className="text-gray-600">SKILLS</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-10">
        {skills.map((skill, idx) => (
          <Skill key={idx} label={skill.label} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default App;
