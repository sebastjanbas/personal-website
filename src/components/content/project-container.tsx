import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type ProjectProps = {
  image: string;
  name: string;
  href: string;
  type: string;
  tech: string;
  id: number;
  year: string;
};

const ProjectContainer = ({
  id,
  image,
  // name,
  href,
  tech,
  year,
  type,
}: ProjectProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-full xl:hover:h-[300px] transition-all duration-700 ease-in-out md:gap-10 h-[100px] overflow-hidden border-slate-500/30 border-t">
      <div className="flex flex-row justify-center items-center h-full w-full">
        <div className="flex flex-row gap-0 justify-start items-start w-[35%]">
          <div className="w-[40%] h-full text-5xl font-bebasNeue">{id}</div>
          <div className="flex self-start w-[60%] h-full font-bebasNeue tracking-widest text-slate-500">
            <p>{year}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-start w-[65%] h-full">
          <p className="text-slate-500 font-bebasNeue tracking-widest">
            TC: <strong className="font-normal text-foreground">{tech}</strong>
          </p>
          <p className="text-slate-500 font-bebasNeue tracking-widest">
            TY:{" "}
            <strong className="capitalize text-foreground font-normal">
              {type}
            </strong>
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center h-full max-w-2xl w-fit gap-10">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger>
              <a href={href} target="_self">
                <div className="h-fit w-fit bg-white border-slate-500/20 group p-2 border-[0.5px] rounded-full shadow-md hover:shadow-xs">
                  <IoIosArrowRoundForward className="size-5 group-hover:-rotate-45 transition-transform duration-200 ease-in-out" />
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent className="bg-[#F1F0EA] text-neutral-500">
              Learn More
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="hidden xl:flex justify-center items-center w-full h-full">
          {image !== "#" ? (
            <div className="relative h-full w-full">
              {/* <p className="absolute text-3xl text-center font-bebasNeue bg-transparent w-full h-full flex justify-center items-center">
                {name}
              </p> */}
              <Image
                src={image}
                alt="Project photo"
                width={1920}
                height={1080}
                className="self-start object-"
              />
            </div>
          ) : (
            <p className="animate-pulse w-[1920px]">COMING SOON</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
