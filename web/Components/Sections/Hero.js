"use client";
import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setCoordinates({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 mx-auto text-center lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl whitespace-pre-line">
            <span className="md:text-7xl lg:text-8xl font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#b478ed] to-[#48a4ff]">
              {" "}
              Effortless Website Deployment.
            </span>
          </h1>
          <p className="mb-8 text-2xl text-gray-300 lg:text-5xl md:text-4xl sm:px-28 xl:px-56">
            Build simple, fast, and secure websites without worrying about
            technical expertise or maintenance.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/soon"
              className="inline-flex items-center justify-center px-5 py-2.5 font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-lg cursor-pointer hover:text-white bg-gradient-to-br from-purple-600 to-blue-600 text-xl"
              onMouseMove={handleMouseMove}
            >
              <svg
                class="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Deploy Now
            </Link>

            {/*<Link
              href="/soon"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-gray-800 text-white rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-gray-100"
            >
              Visit Dashboard
  </Link>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
