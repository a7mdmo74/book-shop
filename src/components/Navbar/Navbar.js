import React, { useState } from "react";
import { HeartIcon, SearchIcon, XCircleIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex items-center justify-between relative">
      <div>
        <h1 className="text-2xl font-bold">Booksy</h1>
      </div>
      {/* will disappear when md devices*/}
      <form className="hidden md:flex items-center justify-between w-[75%] bg-gray-100 py-2 px-6 rounded-lg">
        <input
          type="text"
          className="bg-transparent w-[75%] outline-none text-gray-500"
          placeholder="Search by author title name"
        />
        <span>
          <SearchIcon className="h-5 w-5" />
        </span>
      </form>
      <div className="flex items-center gap-6">
        <span>
          <HeartIcon className="h-5 w-5 text-blue-500 cursor-pointer hover:fill-blue-500" />
        </span>
        <span className="w-10 h-10 rounded-full bg-[#413b89] text-white flex items-center justify-center">
          0
        </span>
        <span>EN</span>
      </div>
      {/* show search div on md devices */}
      <div className="block md:hidden">
        <button
          className="bg-[#413b89] text-white p-2 rounded-xl font-semibold"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <XCircleIcon className="h-5 w-5" />
          ) : (
            <SearchIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      <div
        className={`${
          isActive
            ? "absolute top-10 right-0 w-full rounded-lg bg-[#413b89] p-3 shadow-md ease-in duration-500"
            : "absolute -top-[200%]"
        }`}
      >
        <form className="flex items-center justify-between w-full bg-gray-100 py-2 px-6 rounded-lg">
          <input
            type="text"
            className="bg-transparent w-[75%] outline-none text-gray-500"
            placeholder="Search by author title name"
          />
          <span>
            <SearchIcon className="h-5 w-5" />
          </span>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
