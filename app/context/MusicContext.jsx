"use client";

import React, { createContext, useContext, useState } from "react";

const MusicContext = createContext(null);

const MusicContextProvider = ({ children }) => {
  const [musicArray, setMusicArray] = useState([
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      isFavourite: true,
      isPlaying: false,
    },
    {
      id: 2,
      title: "Blinding Lights",
      artist: "The Weeknd",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 3,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      isFavourite: true,
      isPlaying: false,
    },
    {
      id: 4,
      title: "Levitating",
      artist: "Dua Lipa",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 5,
      title: "Save Your Tears",
      artist: "The Weeknd",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 6,
      title: "Peaches",
      artist: "Justin Bieber",
      isFavourite: true,
      isPlaying: false,
    },
    {
      id: 7,
      title: "Dance Monkey",
      artist: "Tones and I",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 8,
      title: "Happier",
      artist: "Marshmello ft. Bastille",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 9,
      title: "Say So",
      artist: "Doja Cat",
      isFavourite: false,
      isPlaying: false,
    },
  ]);

  return (
    <>
      <MusicContext.Provider
        value={{
          musicArray,
          setMusicArray,
        }}
      >
        {children}
      </MusicContext.Provider>
    </>
  );
};

const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("Context consumed outside Provider");
  }
  return context;
};

export { MusicContext, MusicContextProvider, useMusicContext };
