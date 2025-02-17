"use client";
import { useEffect, useState } from "react";

export default function BackgroundUpdater() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateBackground = (y: number) => {
      let color = "#2F2F2F"; // Default background color
      let fontColor = "#ffffff";
      const vh = window.innerHeight;

      if (y <= 0.75 * vh) {
        color = "#2F2F2F";
      }
      if (y > 0.75 * vh && y < 2 * vh) {
        color = "#ffff";
        fontColor = "#000000";
      }
      if (y > 2 * vh && y < 3 * vh) {
        color = "#098984";
      }
      if (y > 3 * vh && y < 4 * vh) {
        color = "#3E495B";
      }
      if (y >= 4 * vh) {
        color = "#242424";
      }

      document.documentElement.style.setProperty("--background", color);
      document.documentElement.style.setProperty("--foreground", fontColor);
    };

    // Set background immediately on mount
    updateBackground(window.scrollY);

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollPosition(y);
      updateBackground(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-[100] bottom-4 right-4 bg-gray-900 text-white p-2 rounded-lg shadow-lg">
      ScrollY: {scrollPosition}px
    </div>
  );
}
