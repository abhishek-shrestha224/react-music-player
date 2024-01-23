import React from "react";
import MusicCard from "./MusicCard";

const MusicLibrary = () => {
  return (
    <>
      <section className="pb-5 border-t-2 flex flex-col gap-2">
        <h1 className="ml-3 mt-2 text-5xl font-bold">Your Songs:</h1>
        <MusicCard />
      </section>
    </>
  );
};

export default MusicLibrary;
