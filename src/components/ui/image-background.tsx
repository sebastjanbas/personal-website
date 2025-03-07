"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageBackground = () => {
  const { scrollYProgress } = useScroll();

  const [scrollRange, setScrollRange] = useState([0, 0.35]); // Default for Desktop
  const [screenWidth, setScreenWidth] = useState("desktop");

  // Detect if it's a mobile screen and adjust the range
  useEffect(() => {
    const updateScrollRange = () => {
      if (window.innerWidth < 768) {
        setScrollRange([0, 0.55]); // Increase range for slower effect on mobile
        setScreenWidth("mobile")
      } else {
        setScrollRange([-0.35, 0.35]); // Default for Desktop
        setScreenWidth("desktop")
      }
    };

    updateScrollRange(); // Set on mount
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const maskImage = useTransform(scrollYProgress, scrollRange, [
    "linear-gradient(to bottom, black 100%, black 100%)",
    "linear-gradient(to bottom, black 0%, transparent 30%)",
  ]);

  // Clip-path for arrow reveal
  // SVG Stroke Animation (Reveal along path)
  const strokeLength = 22000; // Approximate length of the arrow path
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 0.15],
    [strokeLength, 0],
  );

  return (
    <div className="absolute overflow-hidden z-20 w-screen max-h-[calc(100vh+120px)]">
      <motion.div
        className="relative overflow-x-visible flex justify-center items-center top-0 h-[calc(100vh+100px)] md:h-[calc(100vh+890px)] -translate-y-10 md:-translate-y-20 w-full bg-transparent"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage, // Ensure Safari support
        }}
      >
        {/* Background Image */}
        <Image
          src="/personal-photo-color.png"
          width={1920}
          height={1080}
          alt="Photo of Sebastjan Bas"
          className="object-contain w-full h-full scale-[1.7] translate-y-32 opacity-100 md:scale-[1.5] md:object-contain md:-translate-y-20 lg:scale-[0.65] lg:-translate-y-20 lg:object-[50%_20%]"
        />
      </motion.div>
      {/* Arrow Reveal Effect */}
      <motion.div className="absolute flex justify-center items-center scale-90 md:scale-[40%] h-[500px] w-full justify-self-center self-center bottom-0">
        <svg
          width="1500"
          height="600"
          viewBox="0 0 2998 1105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M669.001 420C669.001 420 1168 183.5 952.001 240.001C736.002 296.501 440.831 509.659 489.001 600C537.17 690.342 1048.96 360.026 1072.5 441.5C1096.04 522.975 -424.926 1412.31 125.074 982.313C675.074 552.312 2231.07 340.001 2231.07 359.001C2231.07 359.001 1008.84 594.857 1002 596.5C995.165 598.144 1190 422.5 1135.5 432C1081 441.5 1072.5 531 1072.5 531C1144.23 598.593 1269.5 463.001 1231.5 250.501C1193.5 38.0006 1213.83 606.995 1231.5 508C1236.75 478.555 1213.71 444.259 1241 432C1308.41 401.714 1344.12 497.285 1333.5 432C1322.88 366.715 1344.75 532.338 1260.5 494.5C1176.25 456.663 1482 370.501 1482 370.501C1482 370.501 1423 388 1396.5 404C1370 420 1519 398.5 1528.5 420C1538 441.5 1338.88 525.361 1387 487.5C1702.48 239.255 1608.5 -178.501 1586.5 95.9998C1564.5 370.501 1449.5 567.5 1500.5 508C1551.5 448.501 1610 420 1639 305.501C1668 191.001 1586.5 661.5 1427.5 796.001C1268.5 930.502 1698.5 223.437 1694.5 340.001C1690.5 456.565 1814.86 356 1679.5 432C1544.14 508 1774.5 324.001 1774.5 324.001C1774.5 324.001 1763 240.784 1763 370.501C1763 500.217 1872.69 253.813 1977.5 305.501C2082.3 357.189 1783 156.501 1260.5 263.501C737.998 370.501 2492 213.001 2556 145.001C2620 77 1354 477.001 1679.5 542.5C2005 608 2504 118.5 2525 221.001C2546 323.501 2549.5 414.5 2515.5 441.5C2481.5 468.501 2296.5 303.501 2304.5 278.001C2312.5 252.5 2761 136.501 2722.5 165.5C2684 194.499 2264.24 417.001 2326 370.501C2387.76 324.001 2617.5 267 2722.5 263.501C2827.5 260.001 2185 522.001 2086 542.5C1987 563 2798.5 221.001 2760.5 278.001C2722.5 335.001 2683.5 402 2641.5 380.501C2599.5 359.001 2777.5 253.266 2760.5 305.501C2752.57 329.869 2882 292.001 2722.5 359.001C2563 426 2874 282.501 2965 263.501C3056 244.501 2914.5 402.001 2618.5 486.501"
            stroke="black"
            strokeWidth={screenWidth === "mobile" ? "10": "8"}
            className={"stroke-foreground"}
            strokeDasharray={strokeLength}
            style={{ strokeDashoffset }}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
          />
        </svg>
      </motion.div>
    </div>
  );
};
