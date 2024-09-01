import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

// Import images directly
import LandlordImage from "../projects/Landlord.png";
import FoodDeliveryImage from "../projects/FoodDelivery.png";
import EcommerceImage from "../projects/E-Commerce.png";

// Map image paths to imports
const images = {
  "/projects/Landlord.png": LandlordImage,
  "/projects/FoodDelivery.png": FoodDeliveryImage,
  "/projects/E-Commerce.png": EcommerceImage,
};

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects that I've worked on. Each project showcases different aspects of my skills and experience as a full-stack developer.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
            >
              <div className="h-full bg-gray-800 bg-opacity-40 border-4 border-gray-700 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={images[project.image]}
                  alt={`Screenshot of ${project.title}`}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href={project.link}
                      className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
