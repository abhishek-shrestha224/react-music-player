import React from "react";
import Controls from "./Controls";
import Progressbar from "./Progressbar";

const AudioPlayer = ({ slug }) => {
  return (
    <div className="w-[500px] gap-4 aboslute bottom-6 flex flex-col justify-center items-center">
      <Progressbar slug={slug} />
      <Controls slug={slug} />
    </div>
  );
};

export default AudioPlayer;
