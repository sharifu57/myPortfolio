import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import { Statistic, StatisticProps } from "antd";
import CountUp from "react-countup";
import Social from "./social";

export default function About() {
  // State for skill progress
  const [skillProgress, setSkillProgress] = useState([0, 0, 0, 0, 0]);

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
    },
    {
      name: "Server Management",
      performance: 45
    },
    {
      name: "Project Management",
      performance: 85
    }
  ];

  const icons = [
    {
      link: "",
      path: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
    }, 
    {
      link: "",
      path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    },
    {
      link: "",
      path: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
    },
    {
      link: "",
      path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
    }
  ]

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
        <h1 className="text-7xl font-bold text-gray-200">Who Am I?</h1>
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

          <div className="flex flex-col md:flex-row items-start pt-7 gap-0 md:gap-20">
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
              <div className="mt-7 flex">
                <Social/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
