import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Skills() {
  // List of skills
  const skills = [
    "JavaScript",
    "React",
    "SQL",
    "Tailwind CSS",
    "MongoDB",
    "Python",
    "Flask",
    "CSS",
    "HTML",
    "Git",
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20"> {/* Background color and padding */}
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-12 text-red-500 inline-block mb-4" /> {/* Increased size and changed color */}
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-white mb-6"> {/* Increased font size */}
            Skills &amp; Technologies
          </h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400"> {/* Enhanced font size and styling */}
            Over the past few years, I've honed a diverse set of skills in web development. I am
            passionate about creating responsive, user-friendly, and scalable applications. Below are some of the technologies and tools I work with regularly.
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-4 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded-lg flex p-6 h-full items-center shadow-md hover:bg-gray-700 transition duration-300"> {/* Background, padding, and hover effect */}
                <BadgeCheckIcon className="text-green-400 w-8 h-8 flex-shrink-0 mr-4" /> {/* Icon size increase */}
                <span className="title-font font-semibold text-xl text-white"> {/* Increased skill text size */}
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
