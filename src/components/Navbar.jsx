import React from "react";

const Navbar = () => {
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
          <a href="#header" className="cursor-pointer  hover:text-gray-800">
            About
          </a>
          <a href="#header" className="cursor-pointer hover:text-gray-800">
            Projects
          </a>
          <a href="#header" className="cursor-pointer hover:text-gray-800">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full text-black font-weight-4 font-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
