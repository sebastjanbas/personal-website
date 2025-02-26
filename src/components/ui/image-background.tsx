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
  const arrowOpacity = useTransform(scrollYProgress, [0.1, 1], [0, 10]);

  return (
    <div className="absolute overflow-hidden w-screen max-h-[calc(100vh+120px)]">
      <motion.div
        className="relative overflow-x-visible z-0 flex justify-center items-center top-0 h-[calc(100vh+65px)] md:h-[calc(100vh+400px)] -translate-y-10 md:-translate-y-20 w-full bg-[#2F2F2F]"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage, // Ensure Safari support
          backfaceVisibility: "hidden", // Prevents flickering on Safari
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
          transform: "translate3d(0,0,0)", // Forces GPU acceleration
          willChange: "transform, opacity", // Prepares browser for smooth animations
          backfaceVisibility: "hidden", // Prevents flickering on Safari
          WebkitFontSmoothing: "antialiased", // Improves text rendering
        }}
      >
        <div>
          <svg
            width="170"
            height="441"
            viewBox="0 0 170 441"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1C183.646 278.841 74.9487 369.962 43.359 313.643C-45.7403 154.794 131.308 116.526 147.462 278.263C163.615 440 152.846 440 152.846 440M152.846 440C149.061 427.593 149.974 414.729 147.462 401.01M152.846 440L169 406.786"
              stroke="var(--foreground)"
              strokeWidth="3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
