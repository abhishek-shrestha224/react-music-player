"use client";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useQueryContext } from "../context/QueryContext";

const SearchBox = () => {
  const { query, setQuery } = useQueryContext();

  return (
    <>
      <div className="mx-auto w-[90%]  h-16 rounded-full flex justify-between items-center gap-2">
        <form className=" relative shadow-md h-[50px] rounded-full w-full">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-mint_ rounded-full h-full w-full pl-8 text-lg text-beige_ focus:outline-none"
            placeholder="Search for songs or artists"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-5 text-4xl font-bold text-beige_/50">
            <CiSearch />
          </span>
        </form>
        <button className="w-12 h-12 flex justify-center items-center text-4xl hover:scale-105 hover:text-beige_/85">
          <Link href="/favourite">
            <IoMdHeart />
          </Link>
        </button>
      </div>
    </>
  );
};

export default SearchBox;
