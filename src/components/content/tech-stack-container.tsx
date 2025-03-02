import { LogoProps } from "@/lib/docs";
import React from "react";

type TechStackProps = {
  name: string;
  description: string;
  Logo: ({ color }: LogoProps) => React.JSX.Element;
};

const TechSteckContainer = ({ name, description, Logo }: TechStackProps) => {
  return (
    <div className="flex flex-row rounded-2xl justify-start gap-5 items-center bg-zinc-800 w-80 h-20 p-5">
      <div className="w-12">
        <Logo color={true} />
      </div>
      <div className="flex flex-col items-start justify-start">
        <span className="text-white">{name}</span>
        <span className="text-white text-xs">{description}</span>
      </div>
    </div>
  );
};

export default TechSteckContainer;
