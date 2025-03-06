import React from "react";
import TechStackLogos from "./techstack-logos";

const TechStackBackground = ({
  height = "h-screen",
  scale = "scale-[1.3]",
  rotate = "rotate-[20deg]",
  gap = "gap-10 xl:gap-20",
  logoGap = "gap-10",
  translateX = "-translate-x-20",
  translateY = "-translate-y-20",
}) => {
  return (
    <div
      className={`absolute overflow-hidden z-0 opacity-20 w-screen inset-0 ${height}`}
    >
      <div
        className={`relative ${rotate} ${scale} ${translateX} ${translateY}`}
      >
        <div className={`flex flex-col ${gap}`}>
          <div className="translate-x-5">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div>
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="-translate-x-1">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="translate-x-6">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="translate-x-1">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="-translate-x-5">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="translate-x-2">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="-translate-x-6">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="translate-x-5">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="translate-x-1">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="translate-x-6">
            <TechStackLogos logoGap={logoGap} />
          </div>
          <div className="-translate-x-5">
            <TechStackLogos logoGap={logoGap} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackBackground;
