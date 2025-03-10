import React from "react";
import LogoBackground from "../ui/logo-background";

const TechStackSection = () => {
  return (
    <section className="relative overflow-hidden h-fit w-screen bg-gradient-to-b from-[#D4EAF6] to-white mb-[15px] p-10 flex flex-col md:flex-row justify-center items-center">
      <div className="my-20 w-full max-w-5xl">
        <h1 className="bg-clip-text font-mantropeFont bg-gradient-to-r w-fit from-[#042943] to-[#8ED3EA] text-6xl lg:text-8xl text-start text-transparent pb-2 font-normal tracking-tighter">
          Tech stack
        </h1>
        <h2 className="text-lg font-mantropeFont font-normal text-start pb-4">
          The tools I use to build, design, and deploy software.
        </h2>
        <div className="my-0 md:my-16 w-full h-full md:h-[500px] flex justify-center items-center">
          <LogoBackground />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
