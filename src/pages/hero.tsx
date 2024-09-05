import React from "react";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="font-raleway">
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <div className="">
          <h1 className="text-9xl font-bold text-gray-100">Hello!</h1>
        </div>
        <div className="text-center -mt-2">
          <p className="text-9xl font-extrabold">
            I am <br />
            Sharifu
          </p>
        </div>
        <div className="mt-7">
          <article className="text-wrap ...">
            <p className="text-1xl">
              FullStack Developer with 5 years of experience in <br />
              Web Systems and Mobile Apps Developement.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
