import { Outlet, Link } from "react-router-dom";
//import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Layout = () => {
  return (
    <>
      <header className="bg-gray-400 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <nav className="md:ml-auto md:py-1 md:pl-4 md:border-l md:border-yellow-600 flex flex-wrap items-center text-base justify-end w-full">
            <Link to="/" className="mr-5 hover:text-yellow-700">
              About
            </Link>
            <Link to="/skills" className="mr-5 hover:text-yellow-700">
              Skills
            </Link>
            <Link to="/projects" className="mr-5 hover:text-yellow-700">
              Projects
            </Link>
            <Link to="/contact" className="mr-5 hover:text-yellow-700">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="bg-[#B9B9B7] min-h-screen flex flex-col">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
