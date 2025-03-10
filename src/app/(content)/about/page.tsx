import DisplayAge from "@/components/content/get-age";
import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "I am a software engineer and full-stack developer from Slovenia. I am passionate about creating fun and engaging applications that improve how people interact with the world. Track and Field have been a big and important part of my life, shaping my discipline and determination.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com/about",
    siteName: "About Me | Sebastjan Bas",
    images: [
      {
        url: "/open-graph-photo.png",
        width: 4096,
        height: 2304,
        alt: "Photo of Sebastjan Bas",
      },
    ],
  },
  ...sharedMetadata,
};

const AboutPage = () => {
  return (
    <>
      <section className="w-screen h-screen p-5 md:p-10 xl:p-20 flex justify-center items-center">
        <div className="relative flex flex-col w-full max-w-5xl h-full justify-center items-center">
          <p className="font-bebasNeue text-2xl md:text-4xl text-justify text-gray-500">
            my name is{" "}
            <strong className="bg-clip-text bg-gradient-to-r from-[#0171e3] to-[#46b1ff] text-transparent">
              sebastjan bas{" "}
            </strong>
            i am <DisplayAge /> years old software engineer based in{" "}
            <strong className="bg-clip-text bg-gradient-to-r from-[#0171e3] to-[#46b1ff] text-transparent">
              slovenia
            </strong>
            , currently studying in us. I love summer and ice creame, but more
            than anything i love good software. If this is something you like as
            well{" "}
            <strong className="bg-clip-text bg-gradient-to-r from-[#0171e3] to-[#46b1ff] text-transparent">
              let&apos;s work together.{" "}
            </strong>
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-sky-200 w-screen h-screen flex justify-center items-star items-startt p-10">
        <div className="w-full max-w-5xl flex justify-start items-start">
          <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 gap-3">
            <div className="flex flex-col justify-start items-start">
              <h3 className="text-xl uppercase">Beyong Portfolio</h3>
              <h1 className="text-5xl xl:text-6xl font-normal tracking-tighter">
                Let&apos;s know more about me
              </h1>
            </div>
            <div>
              {/* Maps image with the city name and country
              <Image /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-white to-sky-200 h-screen w-screen p-5 md:p-10 xl:p-20">
        <div>
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-xl uppercase">Profesional</h3>
            <h1 className="text-5xl xl:text-6xl font-normal tracking-tighter">
              Experience
            </h1>
          </div>
          <p>TODO</p>
        </div>
      </section>
      <section className="w-screen h-screen p-5 md:p-10 xl:p-20">
        <div>
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-5xl">🏃🏻‍➡️</h3>
            <h1 className="text-5xl xl:text-6xl font-normal tracking-tighter">
              Sport Acheivements
            </h1>
          </div>
          <div>
            <p className="text-md text-start">
              Track and field has been a major part of my life for 13 years.
              Competing 400m, 600m, and 800m has taught me discipline,
              perseverance, and the importance of pushing my limits. Some of my
              proudest achievements include 1:52.03 800m with a National title.
              The mindset I’ve built through training and competition carries
              over into my work as a developer, helping me stay focused and
              goal-driven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
