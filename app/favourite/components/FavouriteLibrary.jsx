import React from "react";
import FavouriteMusic from "./FavouriteMusic";
import Header from "./Header";

const FavouriteLibrary = () => {
  return (
    <>
      <section className="border-t-2 flex flex-col gap-2">
        <Header />
        <FavouriteMusic />
      </section>
    </>
  );
};

export default FavouriteLibrary;
