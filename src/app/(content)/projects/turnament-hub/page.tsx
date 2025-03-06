import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Turnament Hub",
  description:
    "A social tournament app for organizing competitions with friends and family across various sports. Still in development, the app will let users create custom tournaments, choose from different tournament formats (round-robin, knockout, etc.), and track match results in real time. Additional planned features include automated bracket generation, customizable scoring systems, and live match updates, making it easy to manage and enjoy competitive play.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com/projects/turnament-hub",
    siteName: "Turnament Hub | Sebastjan Bas",
    images: [],
  },
  ...sharedMetadata,
};

const TurnametHubPage = () => {
  return (
    <section className="h-screen w-screen mt-20 p-5 md:p-10 xl:p-20">
      <h1 className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-7xl md:text-[120px] lg:text-[138px] xl:text-[160px] 2xl:text-[180px] text-center text-transparent pb-2 font-semibold tracking-tight font-bebasNeue">
        Turnament Hub
      </h1>
      <p className="text-center">
        A social tournament app for organizing competitions with friends and
        family across various sports. Still in development, the app will let
        users create custom tournaments, choose from different tournament
        formats (round-robin, knockout, etc.), and track match results in real
        time. Additional planned features include automated bracket generation,
        customizable scoring systems, and live match updates, making it easy to
        manage and enjoy competitive play.
      </p>
    </section>
  );
};

export default TurnametHubPage;
