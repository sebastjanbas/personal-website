"use client";
import { useEffect, useState } from "react";

export default function BackgroundUpdater() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateBackground = (y: number) => {
      let color = "#0c4a6e"; // Default background color
      const vh = window.innerHeight;

      if (y <= 1 * vh) {
        color = "#0c4a6e";
      }
      if (y > 1 * vh && y < 2 * vh) {
        color = "#3b82f6";
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
