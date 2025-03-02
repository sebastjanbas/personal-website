"use client";
import { LogoProps, LogoList } from "@/lib/docs";
import React, { useEffect, useState } from "react";

interface Logo {
  name: string;
  // Component: () => ReactElement;
  Component: ({color}: LogoProps) => React.JSX.Element;
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

    setShuffledArray(shuffleArray(LogoList));
  }, []);

  return (
    <div className="grid grid-flow-col gap-10">
      {shuffledArray.map((logo) => (
        <div key={logo.name}>
          <logo.Component color={false} />
        </div>
      ))}
    </div>
  );
};

export default TechStackLogos
