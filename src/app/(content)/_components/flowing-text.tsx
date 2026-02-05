"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "motion/react";

type CharData = {
  char: string;
  color: string;
  index: number;
};

// Text segments with their target colors
const SEGMENTS: { text: string; color: string }[] = [
  { text: "I'm a software engineer based in ", color: "#E0E0E0" },
  { text: "Slovenia,", color: "#F05039" },
  {
    text: " currently studying in US. I love software and want to make a better tomorrow.",
    color: "#E0E0E0",
  },
];

// Full text for accessibility (screen readers)
const FULL_TEXT = SEGMENTS.map((s) => s.text).join("");

// Starting color for all characters before they're revealed
const DIM_COLOR = "#3a3a3a";

/**
 * Flatten text segments into individual characters with metadata
 * Each char knows its target color and position in the overall text
 */
function buildChars(): CharData[] {
  const chars: CharData[] = [];
  let index = 0;
  for (const segment of SEGMENTS) {
    for (const char of segment.text) {
      chars.push({ char, color: segment.color, index });
      index++;
    }
  }
  return chars;
}

// Pre-compute character array at module load (not on each render)
const ALL_CHARS = buildChars();
const TOTAL = ALL_CHARS.length;

/**
 * AnimatedChar - Single character with scroll-driven color animation
 *
 * Each character animates independently based on its position in the text.
 * Earlier characters reveal first, creating a left-to-right wave effect.
 */
function AnimatedChar({
  char,
  color,
  index,
  progress,
}: {
  char: string;
  color: string;
  index: number;
  progress: MotionValue<number>;
}) {
  // Calculate this character's animation window within the overall scroll progress
  const start = index / TOTAL;
  const end = start + 1 / TOTAL;

  // Map scroll progress to color: dim gray -> target color
  // useTransform interpolates between colors as progress moves through [start, end]
  const animatedColor = useTransform(progress, [start, end], [DIM_COLOR, color]);

  // Spaces use non-breaking space (\u00A0) to preserve width
  // <wbr /> allows line breaks after spaces for proper word wrapping
  if (char === " ") {
    return (
      <>
        <motion.span style={{ color: animatedColor }} aria-hidden>
          {"\u00A0"}
        </motion.span>
        <wbr />
      </>
    );
  }

  return (
    <motion.span style={{ color: animatedColor }} aria-hidden>
      {char}
    </motion.span>
  );
}

export const FlowingText = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Track scroll progress as the element enters the viewport
  // offset: ["start 0.9", "start 0.25"] means:
  //   - progress=0 when element's top reaches 90% down the viewport
  //   - progress=1 when element's top reaches 25% down the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  // This ensures characters animate in on page reload rather than appearing instantly
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <h2
      ref={containerRef}
      // aria-label provides full text to screen readers so they don't read char-by-char
      aria-label={FULL_TEXT}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-6xl font-medium text-left indent-20 md:indent-40 lg:indent-60"
    >
      {ALL_CHARS.map((c, i) => (
        <AnimatedChar
          key={i}
          char={c.char}
          color={c.color}
          index={c.index}
          progress={smoothProgress}
        />
      ))}
    </h2>
  );
};
