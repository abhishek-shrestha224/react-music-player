import { useMusicContext } from "@/app/context/MusicContext";
import React, { useState, useEffect } from "react";

const useSlugAttributes = (slug) => {
  const [currentMusic, setCurrentMusic] = useState({});
  const { musicArray } = useMusicContext();

  useEffect(() => {
    const foundMusic = musicArray.find((music) => {
      const formattedSlug = `[${String(music.id)}]`;
      return slug === formattedSlug || slug === String(music.id);
    });

    if (!foundMusic) {
      throw new Error(`Music with slug ${slug} not found`);
    } else {
      setCurrentMusic(foundMusic);
    }
  }, [slug, musicArray]);

  return currentMusic;
};

export default useSlugAttributes;
