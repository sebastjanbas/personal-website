"use client";

import React, {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {SOCIAL_MEDIA_LINKS} from "@/lib/docs";
import {IconArrowUpRight} from "@tabler/icons-react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const topSectionRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const bigTextRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1px)", () => {
            // Map image slides in from left
            gsap.from(mapRef.current, {
                x: -60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: topSectionRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            });

            // Quote fades in from right
            gsap.from(quoteRef.current, {
                x: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: topSectionRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            });

            // Grid columns stagger in from below
            const gridChildren = gridRef.current?.children;
            if (gridChildren) {
                gsap.from(Array.from(gridChildren).slice(0, 3), {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        });

        return () => mm.revert();
    }, {scope: footerRef});

    return (
        <footer
            ref={footerRef}
            className="sticky bottom-0 min-h-screen w-full pt-16 sm:pt-24 md:pt-60 pb-8 flex flex-col justify-center md:justify-start items-center overflow-hidden px-4 sm:px-6 md:px-8 bg-light-gray text-dark-gray"
        >
            {/* Top section: Map + Quote */}
            <div
                ref={topSectionRef}
                className="flex flex-col md:flex-row justify-between w-full max-w-7xl items-center gap-6 md:gap-10 pb-6 md:pb-4"
            >
                <div
                    ref={mapRef}
                    className="relative w-full md:w-2/5 aspect-video overflow-hidden rounded-2xl"
                >
                    <Image
                        src={"/ljubljana-map.jpg"}
                        fill
                        alt="Map of Ljubljana Slovenia"
                        className="object-cover opacity-80 transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    <div
                        className="absolute bottom-3 left-3 bg-white rounded-full py-1 px-2.5 sm:py-2 sm:px-4 flex justify-center items-center">
                        <span className="text-xs font-manrope tracking-[0.01em] font-medium text-dark-gray">
                            📍 Ljubljana, Slovenia
                        </span>
                    </div>
                </div>
                <div ref={quoteRef} className="flex flex-col items-start py-2 md:py-4 gap-1 sm:gap-2">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-5xl">
                        &quot;The people who are crazy enough to think they can change the world are the ones who
                        do.&quot;
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-gray/50">- Steve Jobs</p>
                </div>
            </div>

            {/* Bottom grid: Name, Nav, Socials */}
            <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full border-t border-dark-gray/20 gap-6 sm:gap-8 md:gap-4 py-6 md:py-4"
            >
                <div className="text-sm sm:text-base">
                    Sebastjan Bas
                </div>
                <div>
                    <ul className="flex flex-row sm:flex-col items-start gap-3 sm:gap-4 flex-wrap">
                        <li><Link href={"/projects"} className="text-sm sm:text-base hover:text-dark-gray/50 transition-colors">
                            Projects
                        </Link></li>
                        <li><Link href={"/blog"} className="text-sm sm:text-base hover:text-dark-gray/50 transition-colors">
                            Blog
                        </Link></li>
                        <li><Link href={"mailto:sebastjan.bas@gmail.com"} className="text-sm sm:text-base hover:text-dark-gray/50 transition-colors">
                            Contact
                        </Link></li>
                    </ul>
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                    <ul className="flex flex-col items-start gap-3 sm:gap-4 w-full">
                        {SOCIAL_MEDIA_LINKS.map((media) => (
                            <li key={media.id} className="w-full">
                                <Link
                                    href={media.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex flex-row justify-between items-center text-sm sm:text-base hover:text-dark-gray/50 transition-colors"
                                >
                                    {media.name}
                                    <IconArrowUpRight size={18}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Big decorative name — pinned to bottom, half clipped */}
            <div className="absolute bottom-0 left-0 w-full translate-y-[30%] pointer-events-none">
                <h1
                    ref={bigTextRef}
                    className="block md:hidden tracking-[-0.07em] font-semibold w-full text-center text-dark-gray/[0.07] text-[25vw] sm:text-[16vw] md:text-[18vw] leading-none whitespace-nowrap"
                >
                    Sebastjan
                </h1>
                <h1
                    ref={bigTextRef}
                    className="hidden md:block tracking-[-0.07em] font-semibold w-full text-center text-dark-gray/[0.07] text-[15vw] sm:text-[16vw] md:text-[18vw] leading-none whitespace-nowrap"
                >
                    Sebastjan Bas
                </h1>
            </div>
        </footer>
    );
};