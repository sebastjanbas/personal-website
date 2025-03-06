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
  console.log(href);
  console.log(name);
  console.log(description);
  return (
    <div className="">
      <div className="w-12">
        <Logo color={true} />
      </div>
    </div>
  );
};

export default TechSteckContainer;
