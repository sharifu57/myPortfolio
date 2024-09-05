import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-raleway">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-100">Hello!</h1>
      </div>
      <div className="text-center -mt-2">
        <p className="text-9xl font-extrabold">
          I am <br />
          Sharifu
        </p>
      </div>
      <div>
        <p>
            FullStack Developer with 5 years of experience in
            JavaScript, React, and Node.js. I specialize in building clean, scalable, and efficient web applications.
        </p>
      </div>
    </div>
  );
}
