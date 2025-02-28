"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function BackgroundUpdater() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);

  const { scrollY } = useScroll();
  const updateBackground = (y: number) => {
    let color = "#2F2F2F"; // Default background color
    let fontColor = "#ffffff";
    const vh = window.innerHeight;

    if (y <= 0.75 * vh) {
      color = "#2F2F2F";
    }
    if (y > 0.75 * vh && y < 4 * vh) {
      color = "#1C6E8C";
      fontColor = "#FCC97D";
    }
    if (y >= 4 * vh) {
      color = "#2F2F2F";
    }
    // color = "#098984";
    // fontColor = "#FF9C86"
    // color = "#644695";
    // fontColor = "#FFF7A1"

    document.documentElement.style.setProperty("--background", color);
    document.documentElement.style.setProperty("--foreground", fontColor);
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    updateBackground(y);
  });

  return null;
  {
    /* <div className="fixed z-[100] bottom-4 right-4 bg-gray-900 text-white p-2 rounded-lg shadow-lg">
      ScrollY: {scrollPosition}px
    </div> */
  }
}
