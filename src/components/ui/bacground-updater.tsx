"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BackgroundUpdater() {

  const SHOW_SCROLL_POSITION = false;
  const CHANGE_BACKGROUND_COLOR = true;
  const [scrollPosition, setScrollPosition] = useState(0);

  const pathname = usePathname();

  const { scrollY } = useScroll();
  const updateBackground = (y: number) => {
    if (pathname.startsWith("/blog")) {
      document.documentElement.style.setProperty("--background", "#121111");
      document.documentElement.style.setProperty("--foreground", "#E0E0E0");
      return;
    }

    let color = "#E0E0E0"; // Default background color
    let fontColor = "#121111";
    const vh = window.innerHeight;

    if (pathname === "/about" && y > 300) {
      color = "#F1F0EA";
      fontColor = "#1D1D1F";
      // fontColor = "#62748E";
    }
    if (y >= (vh - 25)) {
      color = "#121111";
      fontColor = "#E0E0E0";
    }

    // uncomment to enable background change
    if (CHANGE_BACKGROUND_COLOR) {
      document.documentElement.style.setProperty("--background", color);
      document.documentElement.style.setProperty("--foreground", fontColor);
    }
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrollPosition(y)
    updateBackground(y);
  });

  if (SHOW_SCROLL_POSITION) {
    return (
        <div className="fixed z-100 bottom-4 right-4 bg-gray-900 text-white p-2 rounded-lg shadow-lg">
          ScrollY: {scrollPosition}px
        </div>
    );
  }

  return null;
}
