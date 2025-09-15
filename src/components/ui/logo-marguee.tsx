"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { twJoin } from "tailwind-merge";

interface LogoMarqueeProps {
  icons: (() => React.ReactNode)[];
  isReversed?: boolean;
  className?: string;
  duration?: number; // seconds per row-shift
}

const LogoMarquee = ({
  icons,
  isReversed = false,
  className,
  duration = 10,
}: LogoMarqueeProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const movingRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [copies, setCopies] = useState(2);
  const [rowWidth, setRowWidth] = useState<number | null>(null);

  // One logical "row" of icons (no special margin on last item)
  const Row = useMemo(
    () => (
      <div ref={rowRef} className="flex w-fit items-center gap-10">
        {icons.map((Icon, i) => {
          const isLast = i === icons.length - 1;
          return (
            <div
              key={i}
              className={twJoin(
                "relative flex shrink-0 items-center justify-center",
                isLast && "mr-10"
              )}
            >
              <Icon />
            </div>
          );
        })}
      </div>
    ),
    [icons]
  );

  // Measure and decide how many copies we need so the content exceeds the viewport by at least 2x
  useEffect(() => {
    const measure = () => {
      if (!wrapperRef.current || !rowRef.current) return;
      const wrapW = wrapperRef.current.clientWidth;
      const singleRowW = rowRef.current.scrollWidth || 1; // avoid divide by zero

      // Ensure at least 2 rows; target total width >= 2 * viewport width
      const needed = Math.max(2, Math.ceil((wrapW * 2) / singleRowW));
      setCopies(needed);
      setRowWidth(singleRowW);
    };

    measure();
    // re-measure on resize
    const ro = new ResizeObserver(measure);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    if (rowRef.current) ro.observe(rowRef.current);
    return () => ro.disconnect();
  }, []);

  // Build the loop: shift by exactly one rowWidth each cycle; reset; repeat.
  useGSAP(
    () => {
      if (!movingRef.current || !rowWidth) return;

      tlRef.current?.kill();

      gsap.set(movingRef.current, { x: isReversed ? -rowWidth : 0 });

      tlRef.current = gsap
        .timeline({ repeat: -1, defaults: { ease: "none" } })
        .to(movingRef.current, {
          x: isReversed ? 0 : -rowWidth,
          duration,
        })
        .set(movingRef.current, { x: isReversed ? -rowWidth : 0 });
    },
    { dependencies: [isReversed, duration, rowWidth] }
  );

  return (
    <div
      ref={wrapperRef}
      className={twJoin("max-w-full overflow-hidden select-none", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
      }}
    >
      {/* Pause on hover (optional) */}
      <div
        ref={movingRef}
        className="flex w-full"
        onMouseEnter={() => tlRef.current?.pause()}
        onMouseLeave={() => tlRef.current?.play()}
      >
        {/* Render enough copies to cover wide screens so the seam is never visible */}
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} aria-hidden={i > 0}>
            {Row}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
