import React from "react";
import { ImageBackground } from "../ui/image-background";
import { socialMedia } from "@/lib/docs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-[calc(100vh+120px)] w-screen p-5 md:p-10 xl:p-20">
        <ImageBackground />
        <div className="relative w-full mt-20 md:mt-0 h-fit z-10 flex justify-center items-start translate-y-10">
          <div className="flex flex-col">
            <h3
              className="bg-clip-text bg-gradient-to-r from-black to-gray-500
              font-bebasNeue text-transparent text-center
              text-2xl tracking-wider
              sm:text-2xl sm:tracking-[7.5px]
              lg:text-3xl
              lg:tracking-[16.5px]
              "
            >
              Software Engineer | Full-stack developer
            </h3>
            <h1
              className="bg-clip-text bg-gradient-to-b from-black to-white
              font-bebasNeue text-transparent text-center
              text-7xl 
              sm:text-[145px] sm:tracking-[-7px]
              lg:text-[230px] lg:tracking-[-5px]
              "
            >
              {/*
              leading-[50px] sm:leading-[80px] lg:leading-[135px]
                */}
              Sebastjan Bas
            </h1>
          </div>
        </div>
        <div className="relative w-full h-full z-30 flex justify-center items-start translate-y-10">
          <div className="relative max-w-2xl lg:max-w-5xl flex flex-col sm:flex-row w-full  h-fit justify-center sm:justify-between items-center gap-y-0 sm:items-start px-10">
            <div className="flex flex-row md:flex-col gap-5">
              {socialMedia.map((item) => (
                <div
                  key={item.id}
                  className="inline-flex justify-start items-center gap-5 transition-transform duration-200 hover:scale-110"
                >
                  <a href={item.href}>
                    <TooltipProvider delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger>
                          <item.Component size="size-7" />
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.name}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </div>
              ))}
            </div>
            <div
              className="text-foreground font-black font-bebasNeue text-lg text-center leading-none translate-y-2 
  after:block after:h-[1px] after:origin-left after:scale-x-0 after:bg-foreground 
  after:transition-transform after:duration-500 
  hover:after:scale-x-100 hover:tracking-wider transition-all will-change-transform"
            >
              <a
                href="https://docs.google.com/document/d/1peoHs2uNtDp4bT8fS7wZnrPKTzGBYnTQbRC7RwZrg1k/export?format=pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
