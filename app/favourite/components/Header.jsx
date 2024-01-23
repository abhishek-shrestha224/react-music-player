import React from "react";
import Link from "next/link";

import { IoChevronBackOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="h-16 w-screen flex flex-row justify-start items-center shadow-md">
        <button className="font-bold text-5xl">
          <Link href="/">
            <IoChevronBackOutline />
          </Link>
        </button>
        <h1 className="text-3xl font-bold w-full text-center tracking-wide">
          Your Favourites
        </h1>
      </header>
    </>
  );
};

export default Header;
