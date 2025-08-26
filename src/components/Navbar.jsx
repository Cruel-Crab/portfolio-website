import React from "react";
import logo from "../assets/mohmdHiraniTransparentLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="" className="mx-2 w-20" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="http://linkedin.com/in/mohammedhirani" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="http://github.com/Cruel-Crab" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="http://x.com/mohammadhirani2" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
