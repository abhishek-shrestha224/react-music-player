import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
const SearchBox = () => {
  return (
    <>
      <div className="mx-auto w-[96%] h-12 mt-5 rounded-full flex justify-between items-center gap-2">
        <form className=" relative shadow-md rounded-full h-full basis-[88%]">
          <input
            type="text"
            className="bg-mint_ rounded-full h-full w-full pl-12 text-lg text-beige_ focus:outline-none"
            placeholder="Search"
          />
          <button className="absolute top-1/2 -translate-y-1/2 left-2 text-4xl font-bold text-pink_">
            <CiSearch />
          </button>
        </form>
        <button className="text-5xl font-bold text-pink_ h-12 w-12 flex justify-center items-center">
          <IoMdHeart />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
