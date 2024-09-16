import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Footer Left - Copywrite */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Designed and Developed by Sharon Obinda</h3>
        </div>
        
        {/* Footer Center - Year */}
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Copyright © {year} SO</h3>
        </div>
        
        {/* Footer Right - Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Sharonobinda"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharon-obinda-a78b80276/"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/sharon_obinda"
            className="text-white hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
