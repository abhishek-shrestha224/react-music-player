"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-7xl">{error.message}</h1>
      <button
        onClick={() => reset()}
        className="text-2xl font-bold tracking-wide"
      >
        Try again
      </button>
    </div>
  );
}
