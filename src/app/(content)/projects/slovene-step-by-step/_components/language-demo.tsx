"use client";
import { useState } from "react";

export const LanguageSwitcherDemo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "sl", name: "Slovenščina", flag: "🇸🇮" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ];

  const sampleTexts = {
    en: "Welcome to Slovene Step by Step! Start your language learning journey today.",
    sl: "Dobrodošli v Slovene Step by Step! Začnite svojo pot učenja jezika še danes.",
    ru: "Добро пожаловать в Slovene Step by Step! Начните свое языковое путешествие сегодня.",
    it: "Benvenuti in Slovene Step by Step! Iniziate il vostro viaggio di apprendimento linguistico oggi.",
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6">
        Multi-language Support
      </h3>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                selectedLanguage === lang.code
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-lg p-6">
          <p className="text-slate-800 leading-relaxed">
            {sampleTexts[selectedLanguage as keyof typeof sampleTexts]}
          </p>
        </div>

        <div className="text-sm text-slate-600">
          <p>✨ Automatic locale detection</p>
          <p>🌐 Seamless language switching</p>
          <p>📱 Consistent across all devices</p>
        </div>
      </div>
    </div>
  );
};
