"use client";
import { backgroundLogos } from "@/lib/docs";
import React, { ReactElement, useEffect, useState } from "react";

interface Logo {
  name: string;
  Component: () => ReactElement;
}

const TechStackLogos = () => {
  const [shuffledArray, setShuffledArray] = useState<Logo[]>([]);
  useEffect(() => {
    function shuffleArray(array: Logo[]): Logo[] {
      const shuffled = array.slice(); // Create a new array to avoid mutating the original
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    setShuffledArray(shuffleArray(backgroundLogos));
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 md:gap-10">
      {shuffledArray.map((logo) => (
        <div key={logo.name}>
          <logo.Component />
        </div>
      ))}
    </div>
  );
};

export default TechStackLogos
