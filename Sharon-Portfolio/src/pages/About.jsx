import React from "react";
import sharon from "../images/sharon.jpg"; // Corrected import path

export default function About() {
  return (
    <section id="about" className="relative py-40">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="leading-relaxed text-gray-300 text-lg max-w-3xl mb-8">
            I'm <span className="font-semibold text-white">Sharon Obinda</span>, a <span className="text-red-500 font-semibold">Full-Stack Developer</span> with over 2 years of experience delivering custom web and mobile solutions that meet your specific needs. I specialize in providing tailored, agile software solutions to address your unique challenges, whether you're a startup or a growing business. From full-cycle software development to IT consulting, I am committed to helping you build and scale your digital presence.
          </p>
          <p className="leading-relaxed text-gray-300 text-lg max-w-3xl mb-8">
            I pride myself on a client-focused approach, delivering high-quality work on time and within budget. No project is too big or small—each one receives the dedication and attention it deserves.
          </p>
          <p className="leading-relaxed text-white text-lg max-w-3xl font-semibold">
            Let’s collaborate to bring your vision to life!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg shadow-lg"
            alt="Sharon Obinda"
            src={sharon} // Use the imported image
          />
        </div>
      </div>
    </section>
  );
}
