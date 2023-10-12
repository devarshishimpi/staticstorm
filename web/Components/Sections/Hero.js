"use client";
import "@/styles/btnHover.css";
import { useState } from "react";

const Hero = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setCoordinates({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <>
      <section className=" h-screen flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl whitespace-pre-line">
            Deploy website {"\n"}
            <span className="mb:text-6xl lg:text-7xl "> Simple </span>
            <span className="mb:text-6xl lg:text-7xl"> Fast </span>
            <span className="mb:text-6xl lg:text-7xl"> Secure </span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-28 xl:px-56">
            Build simple, fast, and secure websites without worrying about
            technical expertise or maintenance.Build simple, fast, and secure
            websites without worrying about technical expertise or maintenance.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/newproject"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 focus:ring-4 focus:ring-blue-300"
              onMouseMove={handleMouseMove}
            >
              Deploy Now
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div
                className="shine"
                style={{
                  top: `calc(${coordinates.y}px - 50px)`,
                  left: `calc(${coordinates.x}px - 50px)`,
                }}
              ></div>
            </a>
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-gray-800 text-white rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-gray-100"
            >
              Visit Dashboard
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
