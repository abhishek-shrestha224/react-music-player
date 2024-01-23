"use client";

import React, { createContext, useContext, useState } from "react";

const MusicContext = createContext(null);

const MusicContextProvider = ({ children }) => {
  const [musicArray, setMusicArray] = useState([
    {
      id: 1,
      title: "Bleed It Out",
      artist: "Linkin Park",
      songUrl: "/audio/bleed_it_out.mp3",
      thumbUrl: "/img/bleed_it_out.jpg",
      isFavourite: true,
      isPlaying: false,
    },
    {
      id: 2,
      title: "Come And Get Your Love",
      artist: "Redbone",
      songUrl: "/audio/come_and_get_your_love.mp3",
      thumbUrl: "/img/come_and_get_your_love.jpg",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 3,
      title: "Downers At Dusk",
      artist: "Talhah Anjum",
      songUrl: "/audio/downers_at_dusk.mp3",
      thumbUrl: "/img/open_letter.jpg",
      isFavourite: true,
      isPlaying: false,
    },
    {
      id: 4,
      title: "Happy Hour",
      artist: "Talhah Anjum",
      songUrl: "/audio/happy_hour.mp3",
      thumbUrl: "/img/open_letter.jpg",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 5,
      title: "Hotel California",
      artist: "Eagles",
      songUrl: "/audio/hotel_california.mp3",
      thumbUrl: "/img/hotel_california.jpg",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 6,
      title: "Kyun",
      artist: "Talhah Anjum",
      songUrl: "/audio/kyun.mp3",
      thumbUrl: "/img/open_letter.jpg",
      isFavourite: true,
      isPlaying: false,
    },
    {
      id: 7,
      title: "Lovly",
      artist: "Billie Eilish",
      songUrl: "/audio/lovely.mp3",
      thumbUrl: "/img/lovely.jpg",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 8,
      title: "Man Without Love",
      artist: "Engelbert Humperdinck",
      songUrl: "/audio/man_without_love.mp3",
      thumbUrl: "/img/man_without_love.jpg",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 9,
      title: "No Scrubs",
      artist: "Unlike Pluto",
      songUrl: "/audio/no_scrubs.mp3",
      thumbUrl: "/img/no_scrubs.jpg",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 10,
      title: "Red Right Hand",
      artist: "Nick Cave and the Bad Seeds",
      songUrl: "/audio/red_right_hand.mp3",
      thumbUrl: "/img/red_right_hand.jpg",
      isFavourite: false,
      isPlaying: false,
    },
    {
      id: 11,
      title: "Secrets",
      artist: "Talhah Anjum",
      songUrl: "/audio/secrets.mp3",
      thumbUrl: "/img/open_letter.jpg",
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
