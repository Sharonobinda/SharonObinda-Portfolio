import { FaGithub } from "react-icons/fa";
import React from "react";
import { projects } from "../data";

// Import images directly
import EcommerceImage from "../projects/E-Commerce.png";
import LandlordImage from "../projects/Landlord.png";
import FoodDeliveryImage from "../projects/FoodDelivery.png";

// Map image paths to imports
const images = {
  "/projects/E-Commerce.png": EcommerceImage,
  "/projects/Landlord.png": LandlordImage,
  "/projects/FoodDelivery.png": FoodDeliveryImage,
};

// Sort the projects to prioritize the E-commerce website
const sortedProjects = projects.sort((a, b) => {
  if (a.title === "E-Commerce Website") return -1;
  if (b.title === "E-Commerce Website") return 1;
  return 0;
});

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font bg-gray-900 py-20"> {/* Dark background with padding */}
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-6 text-white"> {/* Increased font size */}
            Websites I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300"> {/* Reduced text size for description */}
            Here are some of the projects that I've worked on. Each project showcases different aspects of my skills and experience as a full-stack developer. Click on the GitHub icon to explore the code.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {sortedProjects.map((project) => (
            <div key={project.title} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-80 border-4 border-gray-700 rounded-lg overflow-hidden relative shadow-lg hover:shadow-2xl transition duration-300"> {/* Added shadow and hover effect */}
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
                  <div className="w-10 h-10 bg-gray-700 bg-opacity-75 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300"> {/* Hover effect on GitHub icon */}
                    <FaGithub className="w-6 h-6" />
                  </div>
                </a>
                <div className="p-6">
                  <h1 className="title-font text-xl font-semibold text-white mb-3"> {/* Larger project title */}
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm text-gray-300"> {/* Reduced text size for description */}
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
