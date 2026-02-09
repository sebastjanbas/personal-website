"use client";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Image from "next/image";
import {SOCIAL_MEDIA_LINKS} from "@/lib/docs";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

const VELOCITY_MULTIPLIER = 100; // How much scroll affects speed
const LERP_FACTOR = 0.1; // Smoothing
const VELOCITY_SCALE = 0.01; // Normalizes scroll velocity

const HeroSection = () => {
    const h1DarkRef = useRef<HTMLHeadingElement>(null);
    const h1WhiteRef = useRef<HTMLHeadingElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);
    const scrollVelocityRef = useRef(0);
    const currentTimeScaleRef = useRef(1);

    useGSAP(() => {
        // H1 animation: right to left (both layers in sync)
        const h1Elements = [h1DarkRef.current, h1WhiteRef.current].filter(Boolean);
        if (h1Elements.length > 0) {
            // Set initial transform for GPU layer promotion
            gsap.set(h1Elements, { force3D: true, willChange: "transform" });

            tweenRef.current = gsap.to(h1Elements, {
                xPercent: -50,
                duration: 150,
                ease: "none",
                repeat: -1,
                force3D: true,
            });
        }
    }, []);

    // Capture scroll velocity from Lenis
    useLenis(({ velocity }) => {
        scrollVelocityRef.current = velocity;
    });

    // Smooth timeScale updates via GSAP ticker
    useEffect(() => {
        const updateTimeScale = () => {
            if (!tweenRef.current) return;

            // Calculate target timeScale based on scroll velocity
            const targetTimeScale = 1 + scrollVelocityRef.current * VELOCITY_SCALE * VELOCITY_MULTIPLIER;

            // Lerp current timeScale towards target for smooth transition
            currentTimeScaleRef.current += (targetTimeScale - currentTimeScaleRef.current) * LERP_FACTOR;

            // Snap to exactly 1 when very close to avoid micro-jitter
            if (Math.abs(currentTimeScaleRef.current - 1) < 0.001) {
                currentTimeScaleRef.current = 1;
            }

            // Apply the timeScale
            tweenRef.current.timeScale(currentTimeScaleRef.current);
        };

        gsap.ticker.add(updateTimeScale);

        return () => {
            gsap.ticker.remove(updateTimeScale);
        };
    }, []);

    const h1Text = "- Sebastjan Bas ";

    return (
        <section className={"max-h-screen h-screen w-full relative overflow-hidden isolate bg-light-gray"}>
            {/* Dark h1 in the back */}
            <div className={"absolute top-1/2 -translate-y-1/2 md:top-2/5 md:translate-y-0 z-10 left-0 w-full overflow-visible text-white hover:text-[#1F1F1F]"}>
                <h1
                    ref={h1DarkRef}
                    className={"text-[140px] md:text-[200px] lg:text-[280px] tracking-tighter font-interDisplay font-medium transition-colors duration-700 ease-in-out whitespace-nowrap inline-block leading-[0.8]"}
                >
                    {Array(8).fill(h1Text).join("")}
                </h1>
            </div>
            {/* Main image */}
            <Image
                src={"/personal-photo-gray.png"}
                className={"absolute z-20 bottom-0 left-0 w-full object-cover md:object-contain object-bottom h-full max-h-screen bg-transparent pointer-events-none"}
                width={2964}
                height={2954}
                alt={"Sebastjan Bas"}
            />
            {/* Masked container: image copy + blended white text */}
            <div
                className={"absolute inset-0 z-30 overflow-hidden isolate pointer-events-none"}
                style={{
                    maskImage: "url('/personal-photo-gray.png')",
                    maskSize: "var(--hero-mask-size)",
                    maskPosition: "bottom",
                    maskRepeat: "no-repeat",
                    WebkitMaskImage: "url('/personal-photo-gray.png')",
                    WebkitMaskSize: "var(--hero-mask-size)",
                    WebkitMaskPosition: "bottom",
                    WebkitMaskRepeat: "no-repeat",
                }}
            >
                {/* Image copy inside for blending */}
                <Image
                    src={"/personal-photo-gray.png"}
                    className={"absolute bottom-0 left-0 w-full object-cover md:object-contain object-bottom h-full max-h-screen"}
                    width={2964}
                    height={2954}
                    alt={""}
                    aria-hidden="true"
                />
                {/* White text blends with the image copy above */}
                <div className={"absolute top-1/2 -translate-y-1/2 md:top-2/5 md:translate-y-0 left-0 w-full mix-blend-difference"}>
                    <h1
                        ref={h1WhiteRef}
                        className={"text-[140px] md:text-[200px] lg:text-[280px] tracking-tighter font-interDisplay font-medium text-pink-50 whitespace-nowrap inline-block leading-[0.8]"}
                    >
                        {Array(8).fill(h1Text).join("")}
                    </h1>
                </div>
            </div>
            <h2
                className={"z-30 tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-interDisplay font-semibold text-[#1F1F1F] whitespace-nowrap absolute bottom-6 right-4 sm:bottom-12 sm:right-6 md:bottom-20 md:right-10 indent-0 md:-indent-32 leading-none"}
            >
                {"//"} Software <br/> Engineer

            </h2>
            <div className={"absolute flex flex-row md:flex-col items-center bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-10 gap-4 md:gap-7"}>
                {SOCIAL_MEDIA_LINKS.map((link, i) => (
                    <Link key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.Component size={"size-[20px] md:size-[24px]"} fillColor={"fill-[#383838]"} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
