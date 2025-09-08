"use client";

import { useEffect, useState } from "react";

interface CustomCursorProps {
  children: React.ReactNode;
}

export default function CustomCursor({ children }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device has touch capability
    const checkTouchDevice = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();

    // If it's a touch device, don't set up cursor functionality
    if (isTouchDevice) {
      return;
    }

    let animationFrameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother updates
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners with passive option for better performance
    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover listeners for interactive elements
    const handleInteractiveEnter = () => setIsHoveringInteractive(true);
    const handleInteractiveLeave = () => setIsHoveringInteractive(false);

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input[type='button'], input[type='submit'], input[type='reset'], [onclick], [data-clickable], .cursor-pointer"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleInteractiveEnter);
      element.addEventListener("mouseleave", handleInteractiveLeave);
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      // Clean up interactive element listeners
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleInteractiveEnter);
        element.removeEventListener("mouseleave", handleInteractiveLeave);
      });
    };
  }, [isTouchDevice]);

  return (
    <>
      {children}
      {/* Only show custom cursor on non-touch devices */}
      {!isTouchDevice && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
            mixBlendMode: "difference",
            zIndex: 999999,
          }}
        >
          <div
            className={`absolute rounded-full bg-white transition-all duration-300 ease-out ${
              isClicking ? "scale-75" : "scale-100"
            }`}
            style={{
              width: isHoveringInteractive ? "24px" : "16px",
              height: isHoveringInteractive ? "24px" : "16px",
            }}
          />
        </div>
      )}
    </>
  );
}
