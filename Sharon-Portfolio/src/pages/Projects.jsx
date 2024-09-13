import { FaGithub } from "react-icons/fa";
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
    <section id="projects" className="text-gray-400  body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects that I've worked on. Each project showcases different aspects of my skills and experience as a full-stack developer.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="h-full bg-opacity-40 border-4 rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={images[project.image]}
                  alt={`Screenshot of ${project.title}`}
                />
                <a
                  href={project.link}
                  className="absolute top-2 right-2 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 bg-gray-700 bg-opacity-75 rounded-full flex items-center justify-center">
                    <FaGithub className="w-6 h-6" />
                  </div>
                </a>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
