import { LogoProps } from "@/lib/docs";
import React from "react";

type TechStackProps = {
  name: string;
  description: string;
  Logo: ({ color }: LogoProps) => React.JSX.Element;
  href: string;
};

const TechSteckContainer = ({
  name,
  description,
  Logo,
  href,
}: TechStackProps) => {
  return (
    <a href={href} target="_blank">
      <div className="flex flex-row rounded-2xl justify-start gap-5 items-center bg-zinc-800 max-w-80 max-h-20 p-5 transition-transform duration-200 hover:scale-105">
        <div className="w-12">
          <Logo color={true} />
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="text-white">{name}</span>
          <span className="hidden sm:block text-white text-xs">
            {description}
          </span>
        </div>
      </div>
    </a>
  );
};

export default TechSteckContainer;
