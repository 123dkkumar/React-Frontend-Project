import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div
        className="container mx-auto flex justify-between
        items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent text-white"
      >
        <h1 className="mr-6 font-bold text-2xl">Logo</h1>
        <ul className="hidden md:flex gap-7 text-white font-medium">
          <a href="#header" className="cursor-pointer hover:text-gray-800">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-800">
            About
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-800">
            Projects
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-gray-800"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full text-black font-bold">
          Sign Up
        </button>

        {/* Menu icon toggle */}
        <div
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={handleMenuToggle}
        >
          {showMobileMenu ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 transition-all duration-300 bg-white z-20 ${
          showMobileMenu ? "w-full" : "w-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 mt-20 px-5 text-lg font-medium text-black">
          <a href="#header" onClick={handleMenuToggle}>
            Home
          </a>
          <a href="#about" onClick={handleMenuToggle}>
            About
          </a>
          <a href="#projects" onClick={handleMenuToggle}>
            Projects
          </a>
          <a href="#testimonials" onClick={handleMenuToggle}>
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
