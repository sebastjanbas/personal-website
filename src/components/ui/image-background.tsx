"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export const ImageBackground = () => {
  const { scrollYProgress } = useScroll();

  const maskImage = useTransform(
    scrollYProgress,
    [0, 0.6],
    [
      "linear-gradient(to bottom, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    ]
  );

  return (
    <div className="absolute overflow-hidden max-h-[calc(100vh+120px)]">
      <motion.div
        className="relative z-0 flex justify-center items-center top-0 h-[calc(100vh+65px)] md:h-[calc(100vh+300px)] w-screen bg-gradient-to-t bg-blue-500 overflow-hidden safari-no-mask"
        style={{
          maskImage: maskImage,
        }}
      >
        <Image
          src="/personal-photo3.svg"
          fill
          alt="Photo of Sebastjan Bas"
          className="object-cover scale-[1.3] translate-y-32 opacity-[60%] md:opacity-[80%] md:scale-[0.85] md:-translate-y-20 md:object-[50%_20%]"
        />
      </motion.div>
    </div>
  );
};
