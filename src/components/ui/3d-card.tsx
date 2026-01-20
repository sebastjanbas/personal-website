"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

export default function ThreeDCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = rootRef.current!;
    const card = cardRef.current!;
    const shine = shineRef.current!;

    const zLayers: HTMLElement[] = [imgRef.current!, chipRef.current!].filter(
      Boolean
    ) as HTMLElement[];

    gsap.set(card, {
      transformStyle: "preserve-3d",
      transformPerspective: 900,
    });
    gsap.set(zLayers, { transformStyle: "preserve-3d" });

    const setRX = gsap.quickSetter(card, "rotationX", "deg");
    const setRY = gsap.quickSetter(card, "rotationY", "deg");
    const setTZLayers = zLayers.map((el) => gsap.quickSetter(el, "z", "px"));
    const setShineOpacity = gsap.quickSetter(shine, "opacity");
    const setShineBg = (x: number, y: number) => {
      shine.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(255,255,255,0.0) 40%)`;
    };

    let raf = 0;
    let targetRX = 0,
      targetRY = 0;

    const maxRot = 1.5;
    const maxZ = 30;

    const animate = () => {
      const currentRX = (gsap.getProperty(card, "rotationX") as number) || 0;
      const currentRY = (gsap.getProperty(card, "rotationY") as number) || 0;
      const nextRX = currentRX + (targetRX - currentRX) * 0.12;
      const nextRY = currentRY + (targetRY - currentRY) * 0.12;
      setRX(nextRX);
      setRY(nextRY);

      const nx = nextRY / maxRot;
      const ny = nextRX / maxRot;
      zLayers.forEach((_, i) => {
        const depth = (i + 1) / zLayers.length;
        const z = (1 + depth) * maxZ * 0.5 + (nx + ny) * 2;
        setTZLayers[i](z);
      });

      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cancelAnimationFrame(raf);
      setShineOpacity(1);
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const px = clamp((e.clientX - rect.left) / rect.width, 0, 1);
      const py = clamp((e.clientY - rect.top) / rect.height, 0, 1);

      targetRY = gsap.utils.mapRange(0, 1, -maxRot, maxRot)(px);
      targetRX = gsap.utils.mapRange(0, 1, maxRot, -maxRot)(py);

      setShineBg(e.clientX - rect.left, e.clientY - rect.top);
    };

    const onLeave = () => {
      targetRX = 0;
      targetRY = 0;
      setShineOpacity(0);
      cancelAnimationFrame(raf);
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(zLayers, { z: 0, duration: 0.6, ease: "power3.out" });
    };

    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full select-none perspective-[1000px]"
    >
      <div
        ref={cardRef}
        className="relative rounded-2xl p-5 shadow-2xl transition-shadow duration-300 will-change-transform
                   bg-linear-to-br from-white/80 via-white/70 to-white/60 dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900/50
                   ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/5" />

        <div
          ref={shineRef}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-screen"
        />

        {children}
      </div>
    </div>
  );
}
