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
    <div className="flex flex-col text-center md:text-start justify-center gap-5 w-full h-fit items-center">
      <div className="flex flex-col max-w-5xl md:mt-10 h-full w-full justify-center md:justify-start items-center md:items-start p-5 md:p-10 xl:p-20">
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
      <div className="w-full h-full overflow-hidden">
        {image !== "#" ? (
          <a href={imageLink} target="_blank">
            <Image
              src={image}
              width={1280}
              height={720}
              className="w-full h-[300px] md:h-full object-cover scale-100 md:scale-100"
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
      <div className="w-full max-w-5xl flex flex-col justify-center items-center md:items-start p-5 md:p-10 xl:p-20">
        <p className="text-sm py-5 font-robotoFont font-normal">
          {description}
        </p>
        <Button className="mt-10" variant={"mine"}>
          <Link href={href}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectContainer;
