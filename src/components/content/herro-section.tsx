"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Github from "@/components/Logos/social-media/github";
import LinkedIn from "@/components/Logos/social-media/linked-in";
import Instagram from "@/components/Logos/social-media/instagram";
import XLogo from "@/components/Logos/social-media/x";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
    const h1DarkRef = useRef<HTMLHeadingElement>(null);
    const h1WhiteRef = useRef<HTMLHeadingElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        // H1 animation: right to left (both layers in sync)
        const h1Elements = [h1DarkRef.current, h1WhiteRef.current].filter(Boolean);
        if (h1Elements.length > 0) {
            gsap.to(h1Elements, {
                xPercent: -50,
                duration: 150,
                ease: "none",
                repeat: -1,
            });
        }

        // H2 animation: left to right
        if (h2Ref.current) {
            gsap.fromTo(
                h2Ref.current,
                { xPercent: -50 },
                {
                    xPercent: 0,
                    duration: 100,
                    ease: "none",
                    repeat: -1,
                }
            );
        }
    }, []);

    const h1Text = "- Sebastjan Bas ";
    const h2Text = "- Software Engineer ";

    return (
        <section className={"max-h-screen h-screen w-full relative overflow-hidden isolate"}>
            {/* Dark h1 in the back */}
            <div className={"absolute top-2/5 z-10 left-0 w-full overflow-visible text-white hover:text-[#1F1F1F]"}>
                <h1
                    ref={h1DarkRef}
                    className={"text-[280px] tracking-tighter font-interDisplay font-medium transition-colors duration-700 ease-in-out whitespace-nowrap inline-block leading-[0.8]"}
                >
                    {Array(8).fill(h1Text).join("")}
                </h1>
            </div>
            {/* Main image */}
            <Image
                src={"/personal-photo-gray.png"}
                className={"absolute z-20 bottom-0 left-0 object-contain max-h-screen bg-transparent pointer-events-none"}
                width={2964}
                height={2954}
                alt={"Sebastjan Bas"}
            />
            {/* Masked container: image copy + blended white text */}
            <div
                className={"absolute inset-0 z-30 overflow-hidden isolate pointer-events-none"}
                style={{
                    maskImage: "url('/personal-photo-gray.png')",
                    maskSize: "contain",
                    maskPosition: "bottom",
                    maskRepeat: "no-repeat",
                    WebkitMaskImage: "url('/personal-photo-gray.png')",
                    WebkitMaskSize: "contain",
                    WebkitMaskPosition: "bottom",
                    WebkitMaskRepeat: "no-repeat",
                }}
            >
                {/* Image copy inside for blending */}
                <Image
                    src={"/personal-photo-gray.png"}
                    className={"absolute bottom-0 left-0 object-contain max-h-screen"}
                    width={2964}
                    height={2954}
                    alt={""}
                    aria-hidden="true"
                />
                {/* White text blends with the image copy above */}
                <div className={"absolute top-2/5 left-0 w-full mix-blend-difference"}>
                    <h1
                        ref={h1WhiteRef}
                        className={"text-[280px] tracking-tighter font-interDisplay font-medium text-pink-50 whitespace-nowrap inline-block leading-[0.8]"}
                    >
                        {Array(8).fill(h1Text).join("")}
                    </h1>
                </div>
            </div>
            {/*<h2*/}
            {/*    ref={h2Ref}*/}
            {/*    className={"z-20 tracking-tighter text-[164px] font-interDisplay font-semibold text-[#1F1F1F] whitespace-nowrap absolute bottom-3/12 left-0 leading-tight"}*/}
            {/*>*/}
            {/*    {Array(8).fill(h2Text).join("")}*/}
            {/*</h2>*/}
            <div className={"absolute flex flex-col items-center bottom-8 left-10 gap-7"}>
                <Github size={"size-[24px]"} fillColor={"fill-[#383838]"} />
                <LinkedIn size={"size-[24px]"} fillColor={"fill-[#383838]"} />
                <Instagram size={"size-[24px]"} fillColor={"fill-[#383838]"} />
                <XLogo size={"size-[24px]"} fillColor={"fill-[#383838]"} />
            </div>
        </section>
    );
};

export default HeroSection;
