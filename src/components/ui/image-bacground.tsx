"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export const ImageBackground = () => {
  const { scrollYProgress } = useScroll();

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4],
    [
      //   "polygon(0% 0%, 100% 0%, 100% 0%, 50% 100%, 100% 100%)", // Wavy shape
      "polygon(0% 0%, 100% 0%,  100% 100%, 50% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Straight rectangle
    ]
  );

  return (
    <motion.div
      className="absolute z-0 flex justify-center items-center top-0 h-[calc(100vh+65px)] md:h-[calc(100vh+300px)] w-screen bg-gradient-to-t bg-blue-500 overflow-hidden"
      style={{ clipPath }}
    >
      <Image
        src="/personal-photo3.svg"
        fill
        alt="Photo of Sebastjan Bas"
        className="object-cover scale-[1.3] translate-y-32 opacity-[60%] md:opacity-[80%] md:scale-[0.85] md:-translate-y-20 md:object-[50%_20%]"
      />
      <div className="absolute hidden md:block z-10 bottom-0 bg-white h-[180px] w-full"></div>
    </motion.div>
  );
};
