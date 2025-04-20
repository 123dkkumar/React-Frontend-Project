import React from "react";
import { testimonialData } from "../assets/data";
import { FaStar } from "react-icons/fa"; // ⭐ Import the star icon

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline text-blue-700 cursor-pointer underline-offset-4 decoration-1 font-light hover:text-yellow-700">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with us.{" "}
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white max-w-[340px] border border-gray-200 shadow-2xl rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-lg  font-semibold">{testimonial.name}</h2>
            <p className="text-gray-500 mb-2 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 mb-4 text-red-500">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
