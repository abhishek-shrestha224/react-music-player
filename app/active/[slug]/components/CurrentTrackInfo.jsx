import Image from "next/image";
import React from "react";
import useSlugAttributes from "../hooks/useSlugAttributes";

const CurrentTrackInfo = ({ slug }) => {
  const { thumbUrl, title, artist } = useSlugAttributes(slug);

  return (
    <>
      <section className=" w-[90%] pt-7 overflow  flex flex-col items-center">
        <div className="relative h-80 w-80 overflow-hidden rounded-full shadow-2xl">
          <Image
            src={thumbUrl || "/img/placeholder.jpg"}
            priority
            alt="artist image here"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
          />
        </div>
        <h2 className="mt-4 font-bold text-2xl tracking-wide">{title}</h2>
        <h3 className="text-xl tracking-wider"> {artist}</h3>
      </section>
    </>
  );
};

export default CurrentTrackInfo;
