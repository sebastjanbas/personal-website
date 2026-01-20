import React from "react";
import SocialMedia from "../ui/social-media";
import { navigation } from "@/lib/docs";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-fit w-screen px-5 sm:px-10 xl:px-20 xl:pb-20">
      <div className="flex justify-center items-center w-full h-px">
        <div className="w-full h-full bg-foreground"></div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-row justify-between pt-20 items-center w-full h-full">
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-bebasNeue text-2xl lg:text-4xl leading-[10px] lg:leading-[20px] text-slate-500">
            Sebastjan
          </h3>
          <span className="text-slate-500 text-xs">
            <a href={navigation[1].href}>sebastjan.bas@gmail.com</a>
          </span>
        </div>
        <div className="text-slate-500 font-bebasNeue text-2xl lg:text-4xl">
          <ul className="flex flex-row justify-center items-center  gap-x-10">
            {navigation.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-slate-500 
       duration-200 ease-out 
      md:after:block md:after:h-px md:after:origin-left md:after:scale-x-0 md:after:bg-slate-500 
      md:after:transition-transform md:after:duration-500 md:after:ease-out md:hover:after:scale-x-100"
                  style={{
                    transform: "translate3d(0,0,0)", // Forces GPU acceleration
                    WebkitFontSmoothing: "antialiased", // Improves text rendering
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <SocialMedia
            size="size-[16px] lg:size-[24px]"
            spacing="gap-8 lg:gap-10"
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-row justify-between pt-5 items-center w-full h-full">
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-bebasNeue text-4xl leading-[20px] text-slate-500">
            Sebastjan
          </h3>
          <span className="text-slate-500 text-xs">
            <a>sebastjan.bas@gmail.com</a>
          </span>
          <div className="flex pt-4 justify-center items-center">
            <SocialMedia size="size-[20px]" spacing="gap-5" />
          </div>
        </div>
        <div className="text-slate-500 font-bebasNeue text-4xl">
          <ul className="flex flex-col justify-center items-end gap-x-10">
            {navigation.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xl lg:text-4xl text-slate-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
