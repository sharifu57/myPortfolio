import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import Footer from "./footer";
import Social from "./social";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen font-['raleway']">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center flex-grow pt-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1
            className="text-9xl sm:text-9xl md:text-9xl lg:text-9xl font-bold text-gray-100"
            style={{ fontSize: "200px" }}
          >
            Hello!
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-center -mt-14"
        >
          <p className="text-8xl sm:text-9xl md:text-9xl lg:text-9xl font-extrabold">
            I am <br />
            Sharifu
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-10 md:mt-6 lg:mt-6 sm:mt-6"
        >
          <article className="text-wrap ...">
            <p className="text-1xl">
              FullStack Developer with 5 years of experience in <br />
              Web Systems and Mobile Apps Development.
            </p>
          </article>
        </motion.div>

        {/* <div className="mt-7 flex items-center space-x-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="text-md font-semibold text-sky-500">
            Available for Freelance
          </span>
        </div> */}
        <div className="">
          <Social/>
        </div>
      </div>

      <Footer />
    </div>
  );
}
