import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type ProjectProps = {
  imageLink: string,
  image: string;
  name: string;
  href: string;
  description: string;
  type: string;
};

const ProjectContainer = ({
  image,
  imageLink,
  name,
  href,
  description,
  type,
}: ProjectProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row text-center md:text-start justify-between gap-5 w-full h-fit items-start">
      <div className="flex flex-col md:mt-10 h-full w-full md:w-[50%] justify-center md:justify-start items-center md:items-start">
        <span className="text-xs md:text-sm font-sigmarFont">{type}</span>
        <h1
          className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-transparent
          text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight font-bebasNeue"
        >
          {name}
        </h1>
        <p className="text-sm py-5 font-robotoFont font-normal">{description}</p>
        <Button className="mt-10" variant={"mine"}>
          <Link href={href}>Learn More</Link>
        </Button>
      </div>
      <div className="w-full md:w-[50%] h-full">
        {image !== "#" ? (
          <a href={imageLink} target="_blank">
          <Image
            src={image}
            width={1280}
            height={720}
            className="object-cover"
            alt="Project image"
          />
          </a>
        ) : (
          <div>
            <h1 className="animate-pulse bg-clip-text bg-gradient-to-r from-slate-800 via-slate-400 to-slate-800 md:translate-y-14 uppercase text-center text-5xl md:text-7xl lg:text-8xl  font-bebasNeue font-thin tracking-tight text-transparent">
              coming soon
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
