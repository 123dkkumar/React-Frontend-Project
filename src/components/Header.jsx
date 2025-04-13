import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-center bg-cover flex items-center 
    w-full overflow-hidden"
      style={{ backgroundImage: "url(/Images/home1.jpg) " }}
      id="header"
    >
      <Navbar />
      <div className="containee text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 hover:text-pink-800">
          Explore homes that fit your dreams
        </h2>
        <div>
          <a href="">Projects</a>
          <a href="">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
