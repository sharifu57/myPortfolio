import React from "react";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const imageList = [
    {
      id: 1,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    },
    {
      id: 2,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      id: 3,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      id: 4,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      id: 5,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    },
    {
      id: 6,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    },
    {
      id: 7,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
    },
    {
      id: 8,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
    },
    {
      id: 9,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
    },
    {
      id: 10,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
    },
    {
      id: 11,
      title: "Web Example",
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
    },
    {
      id: 12,
      title: "Web Example",
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
    },
    {
      id: 13,
      title: "Web Example",
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-12.jpg"
    },
    {
      id: 14,
      title: "Web Example",
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-13.jpg"
    }
  ];
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
        <h1 className="text-7xl font-bold text-gray-200">PortFolio.</h1>
      </div>

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          WebSystems
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Mobile Apps
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Websites
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Training
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imageList.map((imageObj) => (
          <div key={imageObj.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={imageObj.image}
              alt=""
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
