import React from "react";
import sharon from "../images/sharon.jpg"; // Corrected import path

export default function About() {
  return (
    <section id="about" className="relative  py-40">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 leading-relaxed text-white text-[17px] max-w-3xl">
            Outsource your project with me and I will deliver the software you need on budget.<br/>
            Delivering tailored agile software solutions for all your software challenges. 
            With over 2 years experience in developing custom mobile and web solutions, Full cycle software development and IT consulting.<br/>
            I work on big and small projects, every project is important.
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
