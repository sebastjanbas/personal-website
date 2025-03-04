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

  // Clip-path for arrow reveal
  // SVG Stroke Animation (Reveal along path)
  const strokeLength = 2000; // Approximate length of the arrow path
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0.06, 0.25],
    [strokeLength, 0],
  );

  return (
    <div className="absolute overflow-hidden w-screen max-h-[calc(100vh+120px)]">
      <motion.div
        className="relative overflow-x-visible z-0 flex justify-center items-center top-0 h-[calc(100vh+100px)] md:h-[calc(100vh+400px)] -translate-y-10 md:-translate-y-20 w-full bg-[#2F2F2F]"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage, // Ensure Safari support
        }}
      >
        {/* Background Image */}
        <Image
          src="/personal-photo.png"
          width={1920}
          height={1080}
          alt="Photo of Sebastjan Bas"
          className="object-cover w-full h-full scale-[1.3] translate-y-32 opacity-[60%] md:opacity-[60%] md:scale-[0.85] md:-translate-y-20 md:object-[50%_20%]"
        />
      </motion.div>
      {/* Arrow Reveal Effect */}
      <motion.div className="absolute flex justify-center items-center h-fit w-full bottom-10">
      <svg
        width="224"
        height="407"
        viewBox="0 0 224 407"
        fill="none"
          className="rotate-6 translate-y-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M185.5 1C153.661 372.978 -18.4504 315.721 3.9725 257.5C26.3954 199.279 331.197 260.5 181.197 102C31.197 -56.5 129.5 197.5 104 273.5C78.4999 349.5 21.4999 399 18.5 396.5C15.5 394 16.4998 363 12.9999 357C9.5 351 15.5 404.5 15.5 404.5C15.5 404.5 59.5 374 61 371.5"
          strokeWidth="2"
          className="stroke-foreground"
          strokeDasharray={strokeLength}
          style={{ strokeDashoffset }} // Controls the reveal
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
        />
      </svg>
      </motion.div>
    </div>
  );
};
