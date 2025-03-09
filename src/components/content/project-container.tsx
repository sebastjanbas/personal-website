import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type ProjectProps = {
  imageLink: string;
  image: string;
  name: string;
  href: string;
  description: string;
  type: string;
  stats: {
    id: number;
    icon: React.ComponentType<{ className?: string }>;
    desc: string;
  }[];
};

const ProjectContainer = ({
  image,
  imageLink,
  name,
  href,
  description,
  type,
  stats,
}: ProjectProps) => {
  return (
    <div className="flex flex-col text-center md:text-start justify-center gap-5 w-full h-fit items-center py-10">
      <div className="flex flex-col max-w-5xl md:my-10 h-full w-full justify-center md:justify-start items-center md:items-start">
        <span className="text-md capitalize md:text-xl font-semibold">
          {type} project
        </span>
        <h1
          className="bg-clip-text bg-gradient-to-r from-[#042943] to-[#8ED3EA] text-transparent
          text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight"
        >
          {name}
        </h1>
      </div>
      <div className="w-full h-full max-h-[800px] overflow-hidden">
        {image !== "#" ? (
          <a href={imageLink} target="_blank">
            <Image
              src={image}
              width={1280}
              height={720}
              className="w-full h-[200px] translate-y-10 md:-translate-y-28 md:h-full object-cover"
              alt="Project image"
            />
          </a>
        ) : (
          <div className="w-full h-full">
            <h1 className="animate-pulse bg-clip-text bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800 uppercase text-center text-5xl md:text-7xl lg:text-8xl  font-bebasNeue font-thin tracking-tight text-transparent">
              coming soon
            </h1>
          </div>
        )}
      </div>
      <div className="w-full max-w-5xl flex flex-col justify-center items-center md:items-start">
        <p className="text-xl font-semibold py-5 font-robotoFont capitalize">
          {description}
        </p>
        <div className="flex text-center flex-row justify-between items-start gap-4 w-full h-full p-10 md:py-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col justify-center items-center gap-2 w-full"
            >
              <stat.icon className="size-8 text-[#1281EA]" />
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
        <Button className="mt-10" variant={"mine"}>
          <Link href={href}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectContainer;
