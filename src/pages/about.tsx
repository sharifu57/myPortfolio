import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import { Statistic, StatisticProps } from "antd";
import CountUp from "react-countup";

export default function About() {
  // State for skill progress
  const [skillProgress, setSkillProgress] = useState([0, 0, 0]);

  const skills = [
    {
      name: "Front End",
      performance: 80
    },
    {
      name: "Back End",
      performance: 86
    },
    {
      name: "Mobile Apps",
      performance: 78
    }
  ];

  useEffect(() => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setSkillProgress((prevProgress) => {
          const updatedProgress = [...prevProgress];
          updatedProgress[index] = skill.performance;
          return updatedProgress;
        });
      }, (index + 1) * 1000);
    });
  }, []);

  return (
    <div className="container min-h-screen font-['raleway']">
      <a href="/">
        <div className="py-5 flex items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-700 mr-2 cursor-pointer"
          />
          <p className="text-sm text-gray-700 cursor-pointer font-sem">Back</p>
        </div>
      </a>
      <div>
        <h1 className="text-7xl font-bold text-gray-200">About Me</h1>
      </div>

      <div className="flex flex-col md:flex-row items-start pt-7">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src="https://via.placeholder.com/300"
            alt="About me"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 pl-0 md:pl-10 text-gray-700">
          <h1 className="text-7xl font-extrabold">Sharifu Majid</h1>
          <p className="text-md leading-relaxed mt-5 text-justify">
            Hi, I'm Sharifu, a FullStack Developer with over 5 years of
            experience in developing web systems and mobile apps. I have a
            strong background in various programming languages and frameworks,
            including React, Node.js, Python, and Flutter. I am passionate about
            building efficient, scalable, and user-friendly applications that
            solve real-world problems.
          </p>

          <div className="flex flex-col md:flex-row items-start pt-5 gap-0 md:gap-20">
            <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-7">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{skill.name}</p>
                    </div>
                    <div className="text-gray-700 mb-2">
                      {skillProgress[index]}%
                    </div>
                  </div>
                  <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-gray-800"
                      style={{
                        width: `${skillProgress[index]}%`,
                        transition: "width 2s ease-in-out"
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
              <div className="flex flex-col md:flex-row items-start pt-7">
                <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
                  <div>
                    <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900">
                      5+
                    </h1>
                    <p className="mb-3 mt-4 font-normal text-gray-700 dark:text-gray-400">
                      Years of Experience
                    </p>
                  </div>
                </div>
                <div className="w-1/2 md:w-1/2 mb-6 md:mb-0">
                  <div>
                    <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900">
                      22+
                    </h1>
                    <p className="mb-3 mt-4 font-normal text-gray-700 dark:text-gray-400">
                      Completed Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
