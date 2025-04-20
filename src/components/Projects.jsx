import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { projects } from "../assets/data";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsToShow >= projects.length ? 0 : prevIndex + 1
    );
  };

  const visibleProjects = projects.slice(startIndex, startIndex + cardsToShow);

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-5 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline text-blue-700 cursor-pointer underline-offset-4 decoration-1 font-light hover:text-yellow-700">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-md mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Carousel */}
      <div className="relative flex items-center">
        <button
          onClick={handlePrevious}
          className="absolute left-0 z-10 bg-white border rounded-full shadow-lg p-3 hover:bg-blue-100 transition duration-200"
        >
          <FaArrowLeft />
        </button>

        <div className="w-full overflow-hidden px-10" id="projects">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 w-[300px] shrink-0 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-blue-600 font-semibold mt-1">
                    Price: {project.price}
                  </p>
                  <p className="text-gray-500 mt-1">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white border rounded-full shadow-lg p-3  hover:bg-blue-100 transition duration-200"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Projects;
