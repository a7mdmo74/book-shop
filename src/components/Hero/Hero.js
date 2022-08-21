import React from "react";
import person from "../../assets/person.jpg";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 my-10 gap-10">
      <div className="flex flex-col justify-center items-start order-2 md:order-1">
        <h1 className="text-3xl md:text-6xl font-bold-translate-y-1/2 text-[#453d7d] md:!leading-[90px]">
          Build your library
        </h1>
        <p className="text-gray-400">
          Buy two selected books and get one for free
        </p>
        <button className="py-2 px-4 bg-[#413b89] text-white rounded-lg mt-4">
          View all
        </button>
      </div>
      <div className="flex justify-end order-1 md:order-2">
        <img src={person} alt="person" className="w-[80%]" />
      </div>
    </div>
  );
};

export default Hero;
