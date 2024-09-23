import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./pages/Footer";
import backgroundimage from "./images/backgroundimage.jpg";

const Layout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      {/* Responsive Navbar with Hamburger Menu */}
      <header className="sticky top-0 z-10 bg-black bg-opacity-75">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:p-5">
          {/* Flex container for name and title */}
          <div className="flex items-center text-white font-medium text-lg md:text-2xl">
            <span>
              Sharon <span className="text-red-500">Obinda</span> | Full-Stack Developer
            </span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>

          {/* Navbar Links */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6 text-white mt-4 md:mt-0 absolute md:relative right-0 top-12 md:top-auto bg-black md:bg-transparent w-full md:w-auto p-4 md:p-0 z-20`}
          >
            <Link
              to="/"
              className="block py-2 md:inline-block md:py-0 text-sm md:text-base hover:underline hover:decoration-red-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 md:inline-block md:py-0 text-sm md:text-base hover:underline hover:decoration-red-500"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="block py-2 md:inline-block md:py-0 text-sm md:text-base hover:underline hover:decoration-red-500"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="block py-2 md:inline-block md:py-0 text-sm md:text-base hover:underline hover:decoration-red-500"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block py-2 md:inline-block md:py-0 text-sm md:text-base hover:underline hover:decoration-red-500"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content section */}
      <div className="container mx-auto py-8 px-4 md:px-6">
        <Outlet />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
