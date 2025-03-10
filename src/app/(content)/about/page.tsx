import DisplayAge from "@/components/content/get-age";
import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaPersonRunning } from "react-icons/fa6";
import { PiMegaphoneLight } from "react-icons/pi";

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
  const languages = [
    { id: 1, flag: "🇸🇮", name: "Slovene", level: "Native" },
    { id: 2, flag: "🇬🇧", name: "English", level: "C1" },
    // { id: 3, flag: "🇩🇪", name: "German", level: "a little" },
  ];

  return (
    <>
      <section className="w-screen h-screen bg-gradient-to-b from-white to-[#F1F0EA] p-5 md:p-10 xl:p-20 flex justify-center items-center">
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
            , currently studying in us. I love creating fun and creative
            applications that improve how people interact with the world.{" "}
            <strong className="bg-clip-text bg-gradient-to-r from-[#0171e3] to-[#46b1ff] text-transparent">
              let&apos;s work together!{" "}
            </strong>
          </p>
        </div>
      </section>
      <section className="bg-[#F1F0EA] w-screen h-fit flex justify-center items-star items-start p-10">
        <div className="w-full max-w-6xl flex justify-start items-start">
          <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 gap-3 w-full h-full">
            <div className="flex flex-col justify-start items-start h-fit w-full">
              <h3 className="text-xl uppercase">Beyong Portfolio</h3>
              <h1 className="text-5xl xl:text-6xl font-normal font-mantropeFont tracking-tighter">
                Let&apos;s know more about me
              </h1>
            </div>
            <div className="bg-white w-full h-full p-5 py-10 rounded-2xl">
              <h3 className="inline-flex text-xl font-mantropeFont">
                <span className="-scale-x-100 rotate-[-10deg] mr-3">
                  <PiMegaphoneLight className="size-7 stroke-[5]" />
                </span>
                Spoken Languages
              </h3>
              <h4 className="text-neutral-500 font-mantropeFont mb-5">
                Slovenija moj doma ...
              </h4>
              <div className="relative flex flex-col">
                {languages.map((lang) => (
                  <div
                    key={lang.id}
                    className="absolute flex flex-row justify-start items-center gap-3 bg-white shadow-xl w-full rounded-xl p-5"
                  >
                    <div className="bg-[#F1F0EA] px-3 py-2 aspect-square flex justify-center items-center text-2xl rounded-full">
                      {lang.flag}
                    </div>
                    <div className="flex flex-col">
                      <span className="">{lang.name}</span>
                      <span className="text-sm text-slate-500">
                        {lang.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-slate-500/30 border-[1px]">
              <Image
                src={"/ljubljana-map.jpg"}
                fill
                alt="Map of Ljubljana Slovenia"
                className="object-cover opacity-80 transition-transform duration-700 ease-in-out hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-white rounded-full py-2 px-4 flex justify-center items-center">
                <span className="text-sm font-mantropeFont">
                  📍 Ljubljana, Slovenia
                </span>
              </div>
            </div>
            <div className="bg-white w-full h-full p-5 py-10 rounded-2xl row-span-2 md:row-span-1 lg:col-span-2">
              <h3 className="inline-flex text-xl font-mantropeFont">
                <span className="mr-3">
                  <FaPersonRunning className="size-7 stroke-[5]" />
                </span>
                Sport Achievements
              </h3>
              <h4 className="text-neutral-500 font-mantropeFont mb-5">
                Trach & Field Athlete for 13+ years
              </h4>
              <div className="flex flex-col md:flex-row gap-3 justify-between items-center w-full h-full">
                <div className="flex flex-col justify-center items-center bg-blue-300 w-full h-full rounded-3xl">
                  <h2 className="text-lg font-mantropeFont font-normal text-white italic">800m PB</h2>
                  <h1 className="text-6xl text-white font-bebasNeue">1:52.03</h1>
                </div>
                <div className="flex flex-col justify-center items-center bg-indigo-300 w-full h-full rounded-3xl">
                  <h2 className="text-lg font-mantropeFont font-normal text-white italic">400m PB</h2>
                  <h1 className="text-6xl text-white font-bebasNeue">49.58</h1>
                </div>
                <div className="flex flex-col justify-center items-center bg-green-300 w-full h-full rounded-3xl">
                  <h2 className="text-lg font-mantropeFont font-normal text-white italic">National Champion</h2>
                  <h1 className="text-6xl text-white font-bebasNeue">5<span className="text-5xl">x</span></h1>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#F1F0EA] to-white h-screen w-screen p-5 md:p-10 xl:p-20">
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
