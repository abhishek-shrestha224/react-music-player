"use client";

import React from "react";

import { TiArrowShuffle } from "react-icons/ti";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { FaPause, FaPlay } from "react-icons/fa6";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import useSlugAttributes from "../hooks/useSlugAttributes";
import { useMusicContext } from "@/app/context/MusicContext";

const Controls = ({ slug }) => {
  const { musicArray, setMusicArray } = useMusicContext();

  const music = useSlugAttributes(slug);

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

  const togglePlay = (id, playing) => {
    setMusicArray((currentMusicArray) => {
      return currentMusicArray.map((music) => {
        if (music.id === id) {
          return { ...music, isPlaying: playing };
        }
        return music;
      });
    });
  };

  return (
    <>
      <section className="w-[90%]  mx-auto flex justify-center items-center h-16 gap-8 shadow-xl rounded-full bg-mint_">
        <button className="btn-primary">
          <TiArrowShuffle />
        </button>
        <button className="btn-primary">
          <TbPlayerTrackPrevFilled />
        </button>
        <button className="realtive btn-primary flex justify-center items-center">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={music.isPlaying || false}
              onChange={(e) => togglePlay(music.id, e.target.checked)}
              className="hidden"
            />
            <div>{music.isPlaying ? <FaPause /> : <FaPlay />}</div>
          </label>
        </button>
        <button className="btn-primary">
          <TbPlayerTrackNextFilled />
        </button>
        <button className="realtive btn-primary flex justify-center items-center">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={music.isFavourite || false}
              onChange={(e) => toggleFavourite(music.id, e.target.checked)}
              className="hidden"
            />
            <div>{music.isFavourite ? <IoMdHeart /> : <IoMdHeartEmpty />}</div>
          </label>
        </button>
      </section>
    </>
  );
};

export default Controls;
