"use client";
import React, { useEffect, useState } from "react";

const LanguageCards = () => {
  const languages = [
    { id: 1, name: "English", level: "Fluent", flag: "🇬🇧" },
    { id: 2, name: "Slovene", level: "Native", flag: "🇸🇮" },
    { id: 3, name: "Italian", level: "Beginner", flag: "🇮🇹" },
    { id: 4, name: "German", level: "Inetermediate", flag: "🇩🇪" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <div className="relative w-full h-full">
      {languages.map((lang, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={lang.id}
            className={`absolute flex flex-row justify-start items-center gap-3 shadow-xl rounded-xl p-5 bg-white w-full h-fit transition-all duration-700
          ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-[0.8]"}
           `}
            style={{
              transform: isActive ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            <div className="bg-[#F1F0EA] px-3 py-2 aspect-square flex justify-center items-center text-2xl rounded-full">
              {lang.flag}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{lang.name}</span>
              <span className="text-sm text-slate-500">{lang.level}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LanguageCards;
