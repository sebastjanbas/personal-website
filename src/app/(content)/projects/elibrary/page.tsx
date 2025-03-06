import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "E-Library",
  description:
    "A digital bookshelf for organizing physical books in a personal database, categorized into virtual rooms for easy access. Still in development, the platform will allow users to search, manage, and share book collections with friends and family. Features include room-based organization, book metadata storage, and seamless sharing options, ensuring books are always easy to find.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com/projects/elibrary",
    siteName: "E-Library | Sebastjan Bas",
    images: []
  },
  ...sharedMetadata,
};

const ELibraryPage = () => {
  return (
    <section className="h-screen mt-20 w-screen p-5 md:p-10 xl:p-20">
      <h1 className="bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-7xl md:text-[120px] lg:text-[138px] xl:text-[160px] 2xl:text-[180px] text-center text-transparent pb-2 font-semibold tracking-tight font-bebasNeue">
        E - Library
      </h1>
      <p className="text-center">
        A digital bookshelf for organizing physical books in a personal
        database, categorized into virtual rooms for easy access. Still in
        development, the platform will allow users to search, manage, and share
        book collections with friends and family. Features include room-based
        organization, book metadata storage, and seamless sharing options,
        ensuring books are always easy to find.
      </p>
    </section>
  );
};

export default ELibraryPage;
