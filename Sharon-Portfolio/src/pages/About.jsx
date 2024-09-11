import React from "react";
import sharon from "../images/sharon.jpg"; // Corrected import path

export default function About() {
  return (
    <section id="about" className="relative bg-gray-800 py-40">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <span className="text-yellow-500">I'm SHARON OBINDA</span>.
            <br className="hidden lg:inline-block" />
            <span className="text-black">FULLSTACK DEVELOPER</span>.
          </h1>
          <p className="mb-8 leading-relaxed text-white text-[17px] max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Sharon Obinda"
            src={sharon} // Use the imported image
          />
        </div>
      </div>
    </section>
  );
}
