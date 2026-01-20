import React from "react";

type statsProp = {
  id: number;
  name: string;
  desc: string;
  value: string;
};

const StatsContainer = ({
  stats,
  textDirection,
  gradient = "from-[#042943] to-slate-300",
}: {
  stats: statsProp[];
  textDirection: string;
  gradient?: string;
}) => {
  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`max-w-[200px] w-full h-full ${textDirection}`}
        >
          <p className="text-md lg:text-lg text-slate-600">{stat.name}</p>
          <span className={`text-5xl md:text-7xl font-semibold bg-clip-text bg-linear-to-r text-transparent ${gradient}`}>
            {stat.value}
          </span>
          <p className="text-md lg:text-lg text-slate-600">{stat.desc}</p>
        </div>
      ))}
    </>
  );
};

export default StatsContainer;
