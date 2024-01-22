"use client";
import Image from "next/image";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useMusicContext } from "../context/MusicContext";

const MusicCard = () => {
  const { musicArray, setMusicArray } = useMusicContext();

  const toggleFavourite = (id, favourited) => {
    setMusicArray((currentMusicArray) => {
      return currentMusicArray.map((music) => {
        if (music.id === id) {
          return { ...music, isFavourite: favourited };
        }
        return music;
      });
    });
  };

  return (
    <>
      <section className="mt-5 flex flex-col justify-start items-start gap-7 w-[96%] mx-auto text-beige_">
        {musicArray.map((music, id) => (
          <article
            key={music.id}
            className="relative w-full h-20 rounded-full flex justify-start items-center pl-7 cursor-pointer"
          >
            <div className="relative h-16 w-16 bg-black/30 overflow-hidden rounded-full mr-5">
              <Image src="/img/thumbnail.jpg" alt="artist image here" fill />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-wide">{music.title}</h2>
              <h3 className="text-md font-regular tracking-normal">
                {music.artist}
              </h3>
            </div>
            <label className="absolute right-7 text-3xl top-1/2 -translate-y-1/2 flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={music.isFavourite}
                onChange={(e) => toggleFavourite(music.id, e.target.checked)}
                className="hidden"
              />

              <div>
                {music.isFavourite ? <IoMdHeart /> : <IoMdHeartEmpty />}
              </div>
            </label>
          </article>
        ))}
      </section>
    </>
  );
};

export default MusicCard;
