import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="min-h-screen mb-4 bg-center bg-cover flex items-center 
    w-full overflow-hidden"
      style={{ backgroundImage: "url(/Images/home1.jpg) " }}
      id="header"
    >
      <Navbar />
      <div className="containee text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">
          Explore <span className="hover:text-amber-300">homes</span> that{" "}
          <span className="hover:text-rose-900">fit</span> your{" "}
          <span className="hover:text-teal-300">dreams</span>
        </h2>
        <div className="space-x-6 mt-16 font-bold">
          <a
            href="Projects"
            className={`border  px-8 py-3 rounded ${
              isHovered ? "bg-blue-500 " : "border-white"
            }`}
          >
            Projects
          </a>
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href="#Contact"
            className=" bg-blue-500 border border-white px-8 py-3 rounded hover:bg-transparent"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
