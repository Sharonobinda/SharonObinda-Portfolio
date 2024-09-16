import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./pages/Footer"; // Ensure the path is correct for your Footer component
import backgroundimage from "./images/backgroundimage.jpg"; // Adjust the path to your background image

const Layout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <header className="md:sticky top-0 z-10 bg-black bg-opacity-75">
        <div className="container mx-auto flex flex-wrap md:flex-row items-center justify-between p-4 md:p-5">
          {/* Flex container for name and title */}
          <div className="flex items-center text-white font-medium text-sm md:text-lg">
            <span className="text-white">
              Sharon <span className="text-red-500">Obinda</span> | Full-Stack Developer
            </span>
          </div>

          {/* Navbar Links */}
          <nav className="flex flex-wrap items-center text-base justify-end w-full md:w-auto mt-2 md:mt-0">
            <Link 
              to="/" 
              className="mr-4 md:mr-5 text-white text-sm md:text-base hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="mr-4 md:mr-5 text-white text-sm md:text-base hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className="mr-4 md:mr-5 text-white text-sm md:text-base hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className="mr-4 md:mr-5 text-white text-sm md:text-base hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="mr-4 md:mr-5 text-white text-sm md:text-base hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content section */}
      <div className="container mx-auto py-8 px-2 md:py-10 md:px-4">
        <Outlet />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
