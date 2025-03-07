import { portfolioStats } from "@/lib/docs";
import React from "react";

const StatsContainer = () => {
  return (
    <div className="flex flex-col mt-0 md:mt-10 md:flex-row w-full h-full justify-center md:justify-end items-end md:items-start gap-3">
      {portfolioStats.map((stat) => (
        <div key={stat.id} className="max-w-[200px] w-full text-end h-full">
          <p className="text-md lg:text-lg text-slate-600">{stat.name}</p>
          <span className="text-5xl md:text-7xl font-semibold bg-clip-text bg-gradient-to-r from-[#042943] to-white text-transparent">{stat.value}</span>
          <p className="text-md lg:text-lg text-slate-600">{stat.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsContainer;
