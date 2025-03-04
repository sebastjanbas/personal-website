import React from "react";
import TechStackLogos from "./techstack-logos";

const TechStackBackground = () => {
  return (
    <div className="absolute overflow-hidden z-0 opacity-20 w-screen h-screen inset-0">
      <div className="relative rotate-[20deg] scale-[1.3] -translate-x-20 -translate-y-20">
        <div className="flex flex-col gap-10 xl:gap-20">
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
          <TechStackLogos />
        </div>
      </div>
    </div>
  );
};

export default TechStackBackground;
