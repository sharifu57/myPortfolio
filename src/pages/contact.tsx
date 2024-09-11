import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Social from "./social";
import Footer from "./footer";

export default function Contact() {
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
        <h1 className="text-7xl font-bold text-gray-200">Contact Me.</h1>
      </div>

      <div className="flex flex-col md:flex-row items-start pt-7 gap-0 md:gap-20 ">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="font-bold text-1xl">DON'T BE SHY!</p>
          <p className="text-md leading-relaxed mt-5 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using.
          </p>
          <div className="flex flex-col md:flex-row items-start pt-5 gap-0 md:gap-0">
            <div className="w-1/4">icon</div>
            <div className="w-auto">
              <p className="font-bold hover:font-extrabold text-sm">Address</p>
              <p className="pt-1 text-sm">
                Swaswa <br />
                Dodoma, Tanzania
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start pt-5 gap-0 md:gap-0">
            <div className="w-1/4">icon</div>
            <div className="w-auto">
              <p className="font-bold hover:font-extrabold text-sm">Email</p>
              <p className="pt-1 text-sm">sharifumajid3@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start pt-5 gap-0 md:gap-0">
            <div className="w-1/4">icon</div>
            <div className="w-auto">
              <p className="font-bold hover:font-extrabold text-sm">Call</p>
              <p className="pt-1 text-sm">
                +255 657 871 769 <br />
                +255 785 322 079
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <form action="">
            <div className="flex flex-col md:flex-row items-start pt-7 gap-0 md:gap-5">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-full mb-6 md:mb-0 py-8">
              <div>
                <input
                  type="eamil"
                  id="email"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="w-full border bg-gray-50 border-gray-300 rounded-lg">
              <textarea
                id="comment"
                rows="4"
                className="w-full px-2 py-2 "
                placeholder="Write a comment..."
                required
              />
            </div>

            <div className="pt-5">
            <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Extra small</button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-7 flex">
        <Footer />
      </div>
    </div>
  );
}
