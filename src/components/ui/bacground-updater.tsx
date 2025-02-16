"use client";
import { useEffect, useState } from "react";

export default function BackgroundUpdater() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y); // update state with scroll position
      let color = "#0c4a6e"; // Default (initial) background color

      if (y > 100 && y < 1500) {
        color = "#ffff"; // Tailwind gray-900
      } else if (y > 1500 && y < 2500) {
        color = "#3b82f6"; // Tailwind blue-500
      } else if (y >= 2500) {
        color = "#242424";
      }

      document.documentElement.style.setProperty("--background", color); // Update CSS variable
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // return null; // No UI needed
  return (
    <div className="fixed z-[100] bottom-4 right-4 bg-gray-900 text-white p-2 rounded-lg shadow-lg">
      ScrollY: {scrollY}px
    </div>
  );
}
