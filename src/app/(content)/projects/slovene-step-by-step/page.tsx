import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Slovene Step By Step",
  description:
    "A language learning platform. built with Next.js and Supabase, offering structured course lectures similar to Udemy. Supports multilingual learning with next-intl and features a responsive, user-friendly design. Migrated from Django to Next.js for improved performance and scalability.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com/projects/slovene-step-by-step",
    siteName: "Slovene Step By Step | Sebastjan Bas",
    images: [
      {
        url: "/slovene-step-by-step-landing-page.png",
        width: 3824,
        height: 2334,
        alt: "Slovene Step By Step Project Image",
      },
    ],
  },
  ...sharedMetadata,
};

const SloPage = () => {
  return (
    <section className="mt-20 h-screen w-screen p-5 md:p-10 xl:p-20">
      <h1 className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-7xl md:text-[120px] lg:text-[138px] xl:text-[160px] 2xl:text-[180px] text-center text-transparent pb-2 font-semibold tracking-tight font-bebasNeue">
        Slovene step by step
      </h1>
      <p className="text-center">
        A language learning platform. built with Next.js and Supabase, offering
        structured course lectures similar to Udemy. Supports multilingual
        learning with next-intl and features a responsive, user-friendly design.
        Migrated from Django to Next.js for improved performance and
        scalability.
      </p>
    </section>
  );
};

export default SloPage;
