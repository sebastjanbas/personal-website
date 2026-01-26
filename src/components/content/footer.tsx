import React from "react";
import Image from "next/image";
import Link from "next/link";
import {SOCIAL_MEDIA_LINKS} from "@/lib/docs";
import {IconArrowUpRight} from "@tabler/icons-react";

export const Footer = () => {
    return (
        <footer className="relative h-screen w-screen mt-40 pt-40 flex flex-col justify-start items-center overflow-hidden">
            <div className="flex flex-row justify-between w-full max-w-7xl items-center gap-10 pb-4">
                <div
                    className="relative w-2/5 aspect-video overflow-hidden rounded-2xl">
                    <Image
                        src={"/ljubljana-map.jpg"}
                        fill
                        alt="Map of Ljubljana Slovenia"
                        className="object-cover opacity-80 transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                    <div
                        className="absolute bottom-3 left-3 bg-white rounded-full py-2 px-4 flex justify-center items-center">
                        <span className="text-sm font-mantropeFont text-dark-gray">
                            📍 Ljubljana, Slovenia
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-start py-4 gap-2">
                    <p className="text-4xl max-w-5xl mx-auto">
                        &#34;The people who are crazy enough to think they can change the world are the ones who
                        do.&#34;
                    </p>
                    <p className="text-2xl">- Steve Jobs</p>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] max-w-7xl w-full border-t border-white/20 gap-4 py-4">
                <div>
                    Sebastjan Bas
                </div>
                <div>
                    <ul className="flex flex-col items-start gap-4">
                        <li><Link href={"/"}>
                            Projects
                        </Link></li>
                        <li><Link href={"/"}>
                            Blog
                        </Link></li>
                        <li><Link href={"/"}>
                            Contact
                        </Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col items-start gap-4 w-full">
                        {SOCIAL_MEDIA_LINKS.map((media) => (
                            <li key={media.id} className="w-full">
                                <Link href={media.href} className="w-full flex flex-row justify-between items-center">
                                    {media.name}
                                    <IconArrowUpRight/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="absolute w-full text-center translate-y-20 bottom-0 -left-3">
                    <h1 className="tracking-[-0.07em] font-semibold w-full text-white/5 text-[18vw] leading-none whitespace-nowrap">Sebastjan Bas</h1>
                </div>
            </div>
        </footer>
    );
};
