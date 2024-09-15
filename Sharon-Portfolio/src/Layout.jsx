import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./pages/Footer"; // Ensure the path is correct for your Footer component
import backgroundimage from "./images/backgroundimage.jpg"; // Adjust the path to your background image

const Layout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundimage})` }} // Corrected name
    >
      <header className="md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap md:flex-row items-center justify-between p-5">
          {/* Flex container for name */}
          <div className="flex items-center text-white font-medium text-lg">
            <span className="text-white">
              Sharon <span className="text-red-500">Obinda</span>
            </span>
          </div>

          {/* Navbar Links */}
          <nav className="flex flex-wrap items-center text-base justify-end md:ml-auto w-full md:w-auto">
            <Link 
              to="/" 
              className="mr-5 text-white hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="mr-5 text-white hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className="mr-5 text-white hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className="mr-5 text-white hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="mr-5 text-white hover:underline hover:decoration-red-500 hover:decoration-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* The content of each page will be rendered here */}
      <div className="container mx-auto py-10 px-4">
        <Outlet />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
