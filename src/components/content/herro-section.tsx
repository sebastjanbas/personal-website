import React from "react";
import { ImageBackground } from "../ui/image-background";
import { socialMedia } from "@/lib/docs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import DownloadCVButton from "../ui/download-cv-button";

const HeroSection = () => {

  return (
    <>
      <section className="flex flex-col bg-gradient-to-b from-white to-[#D4EAF6] justify-center items-center h-[calc(100vh+120px)] w-screen p-5 md:p-10 xl:p-20">
        <ImageBackground />
        <div className="relative w-full mt-16 md:mt-0 h-fit z-10 flex justify-center items-start translate-y-10">
          <div className="flex flex-col">
            <h3
              className="bg-clip-text bg-gradient-to-r from-slate-600 to-gray-400
              font-bebasNeue text-transparent text-center
              text-2xl tracking-wider
              sm:text-2xl sm:tracking-[7.5px]
              lg:text-3xl
              lg:tracking-[16.5px]
              "
            >
              Software Engineer | Full-stack dev
            </h3>
            <h1
              className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white
              font-bebasNeue font-black text-transparent text-center
              text-7xl tracking-tighter 
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
                          <item.Component
                            size="size-7"
                            fillColor="fill-slate-600"
                          />
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-slate-500">
                          {item.name}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </div>
              ))}
            </div>
            <div
              className="text-slate-600 font-semibold font-bebasNeue text-lg text-center leading-none -translate-y-40 sm:translate-y-2 
              md:after:block md:after:h-[1px] md:after:origin-left md:after:scale-x-0 md:after:bg-slate-600 
              md:after:transition-transform md:after:duration-500 
              md:hover:after:scale-x-100 md:hover:tracking-wider transition-all will-change-transform"
            >
              <DownloadCVButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
