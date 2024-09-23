import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="flex flex-col min-h-screen justify-center">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center relative z-10 mt-[-80px]">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white">
            <span className="text-white">Hi, I'm </span>
            <span className="text-red-600 text-4xl md:text-5xl">
              Sharon Obinda
            </span> {/* "Sharon Obinda" will always be on one line */}
            <span className="text-white block md:text-2xl mt-2">From Nairobi, Kenya.</span>
          </h1>

          {/* Know More Button */}
          <Link 
            to="/about" 
            className="mt-8 inline-flex text-white bg-red-600 border-0 py-3 px-8 focus:outline-none hover:bg-red-700 rounded-full text-lg transition duration-300 ease-in-out"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
