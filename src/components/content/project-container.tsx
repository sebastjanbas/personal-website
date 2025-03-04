import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectProps = {
  image: string;
  title: string;
  href: string;
  description: string;
  type: string;
  children?: React.ReactNode;
};

const ProjectContainer = ({
  image,
  title,
  href,
  description,
  type,
  children,
}: ProjectProps) => {
  return (
    <div className="flex flex-row justify-between gap-5 w-full h-full items-center">
      <div className="flex flex-col h-full w-[50%] justify-start items-start">
        <span className="text-[8px] md:text-sm font-sigmarFont">{type}</span>
        <h1 className="text-lg md:text-8xl font-bebasNeue">{title}</h1>
        <p className="text-sm font-mono">{description}</p>
        <div>{children}</div>
      </div>
      <div className="w-[50%] h-full">
        <Link href={href}>
          <Image src={image} width={1280} height={720} className="object-cover" alt="Project image" />
      </Link>
      </div>
    </div>
  );
};

export default ProjectContainer;
