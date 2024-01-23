"use client";
import Image from "next/image";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Link from "next/link";
import { useMusicContext } from "@/app/context/MusicContext";
import { useQueryContext } from "@/app/context/QueryContext";
import { useMemo } from "react";

const MusicCard = () => {
  const { query, setQuery } = useQueryContext();
  const { musicArray, setMusicArray } = useMusicContext();

  const filteredMusic = useMemo(() => {
    return musicArray.filter(
      (music) =>
        music.title.toLowerCase().includes(query.toLowerCase()) ||
        music.artist.toLowerCase().includes(query.toLowerCase())
    );
  });
  console.log(filteredMusic);

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
        {filteredMusic.map((music, id) => (
          <article
            key={music.id}
            className="relative w-full h-20 rounded-full "
          >
            <Link href={`/active/${music.id}`}>
              <div className="flex justify-start items-center pl-7 cursor-pointer">
                <div className="relative h-16 w-16 overflow-hidden rounded-full mr-5">
                  <Image
                    src={music.thumbUrl}
                    alt="artist image here"
                    fill
                    priority
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 80vw, 120px"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-wide">
                    {music.title}
                  </h2>
                  <h3 className="text-md font-regular tracking-normal">
                    {music.artist}
                  </h3>
                </div>
              </div>
            </Link>
            <label className="absolute right-7 text-3xl top-1/2 -translate-y-1/2 flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={music.isFavourite}
                value={music.isFavourite}
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
