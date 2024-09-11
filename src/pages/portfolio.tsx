import React from "react";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const imageList = [
    {
      id: 1,
      title: "Web Example",
      // image: "jamii.png",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      link: "https://flowbite.s3.amazonaws.com/"
    },
    {
      id: 2,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      link: "https://flowbite.s3.amazonaws.com/"
    },
    {
      id: 3,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      link: "https://flowbite.s3.amazonaws.com/"
    },
    {
      id: 4,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      link: "https://flowbite.s3.amazonaws.com/"
    },
    {
      id: 5,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      link: "https://flowbite.s3.amazonaws.com/"
    },
    {
      id: 6,
      title: "Web Example",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      link: "https://flowbite.s3.amazonaws.com/"
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
          <a href={imageObj?.link} target="_blank">
            <div key={imageObj.id} className="group relative overflow-hidden rounded-lg">
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={imageObj.image}
              alt={imageObj.title}
              // style={{height: '200px', width: '300px'}}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl font-bold">{imageObj.title}</h3>
            </div>
          </div>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
}
