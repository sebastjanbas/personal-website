/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BackgroundUpdater() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const pathname = usePathname();

  const { scrollY } = useScroll();
  const updateBackground = (y: number) => {
    let color = "#ffffff"; // Default background color
    let fontColor = "#1D1D1F";
    const vh = window.innerHeight;

    if (pathname === "/about" && y > 300) {
      color = "#F1F0EA";
      fontColor = "#1D1D1F";
      // fontColor = "#62748E";
    }
    if (y >= 6 * vh) {
      color = "#2f2f2f";
      fontColor = "#ffff";
    }
    // color = "#098984";
    // fontColor = "#FF9C86"
    // color = "#644695";
    // fontColor = "#FFF7A1"
    // color = "#1C6E8C";
    // fontColor = "#FCC97D";

    // uncomment to enable background change
    // document.documentElement.style.setProperty("--background", color);
    // document.documentElement.style.setProperty("--foreground", fontColor);
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrollPosition(y)
    updateBackground(y);
  });

  return null;
  // return (
  //   <div className="fixed z-100 bottom-4 right-4 bg-gray-900 text-white p-2 rounded-lg shadow-lg">
  //     ScrollY: {scrollPosition}px
  //   </div>
  // );
}
