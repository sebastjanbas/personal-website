"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageBackground = () => {
  const { scrollYProgress } = useScroll();

  const [scrollRange, setScrollRange] = useState([0, 0.35]); // Default for Desktop

  // Detect if it's a mobile screen and adjust the range
  useEffect(() => {
    const updateScrollRange = () => {
      if (window.innerWidth < 768) {
        setScrollRange([0, 0.55]); // Increase range for slower effect on mobile
      } else {
        setScrollRange([0, 0.35]); // Default for Desktop
      }
    };

    updateScrollRange(); // Set on mount
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const maskImage = useTransform(scrollYProgress, scrollRange, [
    "linear-gradient(to bottom, black 100%, black 0%)",
    "linear-gradient(to bottom, black 0%, transparent 100%)",
  ]);

  // Animate arrow opacity so it fades in as you scroll
  const arrowOpacity = useTransform(scrollYProgress, [0, 1], [0, 9]);

  return (
    <div className="absolute overflow-hidden w-screen max-h-[calc(100vh+120px)]">
      <motion.div
        className="relative overflow-x-visible z-0 flex justify-center items-center top-0 h-[calc(100vh+65px)] md:h-[calc(100vh+400px)] -translate-y-10 md:-translate-y-20 w-full bg-[#2F2F2F]"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage, // Ensure Safari support
        }}
      >
        {/* Background Image */}
        <Image
          src="/personal-photo3.svg"
          fill
          alt="Photo of Sebastjan Bas"
          className="object-cover scale-[1.3] translate-y-32 opacity-[60%] md:opacity-[60%] md:scale-[0.85] md:-translate-y-20 md:object-[50%_20%]"
        />
      </motion.div>
      {/* Arrow Reveal Effect */}
      <motion.div
        className="absolute flex justify-center items-center w-full bottom-10"
        style={{
          opacity: arrowOpacity, // Controls fade-in effect
        }}
      >
        <h1 className="absolute font-bigShoulders font-bold text-3xl md:text-8xl uppercase tracking-[20px]">
          Tech Stack
        </h1>
        <Image
          width={200}
          height={200}
          className="rotate-[25deg] h-40 w-auto md:h-auto"
          src="/arrow.svg"
          alt="arrow symbol"
        />
      </motion.div>
    </div>
  );
};
