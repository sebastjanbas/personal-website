import React from "react";
import TechStackBackground from "../ui/techstack-background";

const TechStackSection = () => {
  return (
    <section className="relative overflow-hidden h-fit w-screen bg-gradient-to-b from-[#D4EAF6] to-white mb-[15px] flex flex-col md:flex-row">
      <div className="p-5 md:p-10 lg:p-20">
        <h1 className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-7xl md:text-[120px] lg:text-[138px] xl:text-[160px] 2xl:text-[180px] text-start text-transparent pb-2 font-semibold tracking-tight font-bebasNeue">
          Tech stack
        </h1>
        <div className="md:translate-x-5 ">
          <h2 className="text-lg font-robotoFont font-normal text-start pb-4">
            The tools I use to build, design, and deploy software.
          </h2>
          <p className="text-sm text-start font-robotoFont font-normal pb-10">
            I work with a range of technologies that help me turn ideas into
            functional, scalable, and user-friendly solutions. From frontend
            design to backend infrastructure, here’s what powers my development
            workflow:
          </p>
        </div>
      </div>
      <div className="relative flex h-[200px] md:h-fit w-full">
        <TechStackBackground
          height="h-screen"
          rotate="rotate-[30deg]"
          gap="gap-12 md:gap-10"
          logoGap="gap-10"
          scale="scale-[0.6] sm:scale-[0.8] md:scale-100"
          translateX="-translate-x-32 md:-tranlate-x-20"
          translateY="-translate-y-[400px] md:-translate-y-20"
        />
      </div>
    </section>
  );
};

export default TechStackSection;
