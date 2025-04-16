import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center 
  justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
        About{" "}
        <span className="underline underline-offset-4 decoration-3 under font-light text-blue-700 hover:text-yellow-700">
          Our Brand{" "}
        </span>
      </h1>
      <p>Passionate about properties , Dedicated to your Vision</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src="/Images/home4.jpg"
          alt=""
          className=" sm:w-2/3 max-w-lg  w-70 h-70 object-cover rounded-full border mt-20 "
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">19+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Years of Excellence</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            deleniti provident illum delectus et, hic aspernatur eum voluptate
            similique, fugit dolores voluptates. Cupiditate blanditiis possimus
            itaque maiores, accusamus atque saepe!
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded hover:text-black hover:bg-transparent hover:border border-red-600 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
