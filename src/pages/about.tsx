import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

export default function About() {
  return (
    <div className="container min-h-screen font-['raleway']">
      <div className="py-5 flex items-center">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-gray-700 mr-2 cursor-pointer"
        />
        <p className="text-sm text-gray-700 cursor-pointer font-sem">Back</p>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-200">About Me</h1>
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
            <h1 className="text-3xl">Sharifu Majid</h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm Sharifu, a FullStack Developer with over 5 years of
            experience in developing web systems and mobile apps. I have a
            strong background in various programming languages and frameworks,
            including React, Node.js, Python, and Flutter. I am passionate about
            building efficient, scalable, and user-friendly applications that
            solve real-world problems.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            In my free time, I love exploring new technologies, contributing to
            open source projects, and continuously improving my skills. I also
            enjoy mentoring and helping others grow in their careers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
