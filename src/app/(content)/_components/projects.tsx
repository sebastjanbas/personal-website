"use client";

import {MouseEvent, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {PROJECT_DATA} from "@/lib/docs";

type Direction = "top" | "bottom";

interface RowState {
    isHovered: boolean;
    origin: Direction;
}

export const Projects = () => {
    const [rowStates, setRowStates] = useState<Record<number, RowState>>({});
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const lastHoveredIndex = useRef<number | null>(null);

    const getDirectionFromMouse = (e: MouseEvent, element: HTMLElement): Direction => {
        const rect = element.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        return e.clientY < midY ? "top" : "bottom";
    };

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>, index: number) => {
        let enterDirection: Direction;

        // Determine direction based on previous hovered index
        if (lastHoveredIndex.current !== null) {
            // Coming from another row
            enterDirection = index > lastHoveredIndex.current ? "top" : "bottom";
        } else {
            // First hover - use mouse position
            enterDirection = getDirectionFromMouse(e, e.currentTarget);
        }

        // Update previous row's exit animation
        if (lastHoveredIndex.current !== null && lastHoveredIndex.current !== index) {
            const prevIndex = lastHoveredIndex.current;
            // Cursor going DOWN → exit from top to bottom (origin bottom)
            // Cursor going UP → exit from bottom to top (origin top)
            const exitOrigin = index > prevIndex ? "bottom" : "top";
            setRowStates((prev) => ({
                ...prev,
                [prevIndex]: {isHovered: false, origin: exitOrigin},
            }));
        }

        // Update current row
        setRowStates((prev) => ({
            ...prev,
            [index]: {isHovered: true, origin: enterDirection},
        }));

        lastHoveredIndex.current = index;
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>, index: number) => {
        const exitDirection = getDirectionFromMouse(e, e.currentTarget);
        // Exit toward top → shrink upward (origin bottom)
        // Exit toward bottom → shrink downward (origin top)
        const exitOrigin = exitDirection === "top" ? "top" : "bottom";

        setRowStates((prev) => ({
            ...prev,
            [index]: {isHovered: false, origin: exitOrigin},
        }));

        lastHoveredIndex.current = null;
    };

    return (
        <div className="w-full mt-10 md:mt-20 px-4 md:px-5">
            {/* Desktop header - hidden on mobile */}
            <div
                className="hidden md:grid grid-cols-[1fr_1fr_1fr_8rem] gap-4 border-b border-light-gray text-white/70! font-semibold">
                <p className="text-xs uppercase my-3">Project</p>
                <p className="text-xs uppercase my-3">Category</p>
                <p className="text-xs uppercase my-3">Highlight</p>
                <p className="text-xs uppercase my-3 text-right">Year</p>
            </div>
            {/* Mobile header */}
            <div
                className="md:hidden grid grid-cols-[1fr_auto] gap-4 border-b border-light-gray text-white/70! font-semibold">
                <p className="text-xs uppercase my-3">Project</p>
                <p className="text-xs uppercase my-3 text-right">Year</p>
            </div>
            {PROJECT_DATA.map((item, index) => {
                const state = rowStates[index] || {isHovered: false, origin: "top"};
                const isHovered = state.isHovered;
                const isOpen = openIndex === index;

                const handleClick = () => {
                    setOpenIndex(isOpen ? null : index);
                };

                return (
                    <div
                        key={index}
                        className="border-b border-light-gray"
                    >
                        {/* Header/Trigger area */}
                        <div
                            className="relative overflow-hidden cursor-pointer"
                            onMouseEnter={(e) => handleMouseEnter(e, index)}
                            onMouseLeave={(e) => handleMouseLeave(e, index)}
                            onClick={handleClick}
                        >
                            {/* Background layer */}
                            <div
                                className="absolute inset-0 bg-white pointer-events-none"
                                style={{
                                    transformOrigin: state.origin,
                                    transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                                    transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
                                }}
                            />

                            {/* Content layer - Header (Desktop) */}
                            <div className="relative hidden md:grid grid-cols-[1fr_1fr_1fr_8rem] gap-4">
                                <p
                                    className="text-sm capitalize py-2.5 transition-all duration-300 ease-out"
                                    style={{
                                        color: isHovered ? "var(--dark-gray)" : "white",
                                        transform: isHovered ? "translateX(20px)" : "translateX(0%)"
                                    }}
                                >
                                    {item.name}
                                </p>
                                <p
                                    className="text-sm capitalize py-2.5 transition-all duration-300 ease-out"
                                    style={{color: isHovered ? "var(--dark-gray)" : "white"}}
                                >
                                    {item.category}
                                </p>
                                <p
                                    className="text-sm capitalize py-2.5 transition-all duration-300 ease-out"
                                    style={{color: isHovered ? "var(--dark-gray)" : "white"}}
                                >
                                    {item.highlight}
                                </p>
                                <p
                                    className="text-sm text-right capitalize py-2.5 transition-all duration-300 ease-out"
                                    style={{
                                        color: isHovered ? "var(--dark-gray)" : "white",
                                        transform: isHovered ? "translateX(-20px)" : "translateX(0%)"
                                    }}
                                >
                                    {item.year}
                                </p>
                            </div>
                            {/* Content layer - Header (Mobile) */}
                            <div className="relative md:hidden grid grid-cols-[1fr_auto] gap-4">
                                <p
                                    className="text-sm capitalize py-2.5 transition-all duration-300 ease-out"
                                    style={{
                                        color: isHovered ? "var(--dark-gray)" : "white",
                                        transform: isHovered ? "translateX(10px)" : "translateX(0%)"
                                    }}
                                >
                                    {item.name}
                                </p>
                                <p
                                    className="text-sm text-right capitalize py-2.5 transition-all duration-300 ease-out"
                                    style={{
                                        color: isHovered ? "var(--dark-gray)" : "white",
                                        transform: isHovered ? "translateX(-10px)" : "translateX(0%)"
                                    }}
                                >
                                    {item.year}
                                </p>
                            </div>
                        </div>

                        {/* Accordion Content */}
                        <div
                            className="grid transition-[grid-template-rows,opacity] duration-500"
                            style={{
                                gridTemplateRows: isOpen ? "1fr" : "0fr",
                                opacity: isOpen ? 1 : 0,
                                // transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                                transitionTimingFunction: "ease-in-out",

                            }}
                        >
                            <div className="overflow-hidden">
                                <div className="py-4 text-white flex flex-col gap-3 md:gap-4">
                                    <h1 className="text-xl sm:text-2xl md:text-[32px] mt-4 md:mt-8 mb-1 md:mb-2.5">{item.content.description}</h1>
                                    <Button variant="secondary" className="rounded-full w-fit" size="sm" asChild>
                                        <Link href={item.content.link} target="_blank" rel="noopener noreferrer">
                                            See Website
                                        </Link>
                                    </Button>
                                    <ul className="flex flex-row flex-wrap gap-2 md:gap-4 text-sm md:text-base">{item.content.technologies.map((technology, i) => (
                                        <li key={i}>
                                            {technology}
                                        </li>
                                    ))}</ul>
                                    <Link href={item.content.moreInfoLink} className="underline text-sm md:text-base">Read more</Link>
                                    <div className="flex flex-col sm:flex-row justify-between gap-2 w-full">
                                        {item.content.imageLinks.map((image, i) => (
                                            <div className="flex-1 min-w-0" key={i}>
                                                <Image src={image.link}
                                                       className="object-cover rounded-md w-full h-auto sm:h-full" width={850} height={462}
                                                       alt={image.alt}/>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
