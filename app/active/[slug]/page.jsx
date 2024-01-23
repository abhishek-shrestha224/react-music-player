"use client";

import React, { useContext } from "react";

import AudioPlayer from "./components/AudioPlayer";
import CurrentTrackInfo from "./components/CurrentTrackInfo";
import Header from "./components/Header";

const page = ({ params }) => {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-between items-center pb-12">
        <Header />
        <CurrentTrackInfo slug={params.slug} />
        <AudioPlayer slug={params.slug} />
      </div>
    </>
  );
};

export default page;
