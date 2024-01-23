import React from "react";

const Progressbar = () => {
  return (
    <div className="w-[100%] flex flex-col mt-10">
      <input
        type="range"
        min="1"
        max="100"
        // value={50}
        step="0.25"
        className="progressbar"
      />
    </div>
  );
};

export default Progressbar;
