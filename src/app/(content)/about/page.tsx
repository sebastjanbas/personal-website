import DisplayAge from "@/components/content/get-age";
import { BsChatQuote } from "react-icons/bs";
import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaLink, FaPersonRunning } from "react-icons/fa6";
import { PiMegaphoneLight } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LanguageCards from "./_components/language-cards";

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
            applications that improve the way people interact with the world.{" "}
            <br className="block md:hidden" />
            <strong className="bg-clip-text bg-gradient-to-r from-[#0171e3] to-[#46b1ff] text-transparent">
              let&apos;s work together!{" "}
            </strong>
          </p>
        </div>
      </section>
      <section className="bg-[#F1F0EA] w-screen h-fit flex justify-center items-star items-start p-10 pb-28">
        <div className="w-full max-w-6xl flex justify-start items-start h-full">
          <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-12 lg:grid-rows-2 gap-3 w-full h-full">
            <div className="flex flex-col justify-center lg:justify-start bg-transparent items-start h-full w-full row-span-1 lg:col-span-4">
              <h3 className="text-xl uppercase">Beyond Portfolio</h3>
              <h1 className="text-5xl xl:text-6xl font-normal font-mantropeFont tracking-tighter">
                Let&apos;s know more about me
              </h1>
            </div>
            <div className="bg-white w-full h-full p-5 py-10 rounded-2xl row-span-1 lg:col-span-4">
              <h3 className="inline-flex text-xl font-mantropeFont">
                <span className="-scale-x-100 rotate-[-10deg] mr-3">
                  <PiMegaphoneLight className="size-7 stroke-[5]" />
                </span>
                Spoken Languages
              </h3>
              <h4 className="text-neutral-500 font-mantropeFont mb-5">
                &quot;Due Cappucci e un cornetto per favore&quot;
              </h4>
              <LanguageCards />
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-slate-500/30 border-[1px] row-span-1 lg:col-span-4">
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
            <div className="bg-white w-full h-full p-5 py-10 rounded-2xl row-span-2 sm:row-span-1 lg:col-span-7">
              <div className="flex flex-row w-full justify-between items-start">
                <div>
                  <h3 className="inline-flex text-xl font-mantropeFont">
                    <span className="mr-3">
                      <FaPersonRunning className="size-7 stroke-[5]" />
                    </span>
                    Sport Achievements
                  </h3>
                  <h4 className="text-neutral-500 font-mantropeFont mb-5">
                    Trach & Field Athlete for 13+ years
                  </h4>
                </div>
                <div>
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger>
                        <a
                          href="https://worldathletics.org/athletes/slovenia/sebastjan-bas-14912240"
                          target="_blank"
                        >
                          <FaLink className="size-6 text-neutral-500" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-50 border-slate-500/30 border-[1px] rounded-lg">
                        <p className="font-mantropeFont text-foreground">
                          World Athletics | Sebastjan Bas
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-center w-full h-full">
                <div className="flex flex-col justify-center items-center bg-[#8EE0F8] text-neutral-700 w-full h-full rounded-3xl transition-transform hover:-translate-x-3 hover:-translate-y-3 hover:rotate-[-5deg] duration-500 ease-out">
                  <h2 className="text-lg font-mantropeFont font-normal italic">
                    800m PB
                  </h2>
                  <h1 className="text-6xl font-bebasNeue">1:52.03</h1>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#FCE3DE] w-full h-full rounded-3xl transition-transform hover:-translate-y-3 hover:rotate-[3deg] duration-500 ease-out">
                  <h2 className="text-lg font-mantropeFont font-normal italic">
                    400m PB
                  </h2>
                  <h1 className="text-6xl font-bebasNeue">49.58</h1>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#BCE5A5] w-full h-full rounded-3xl transition-transform hover:translate-x-3 hover:-translate-y-3 hover:rotate-[5deg] duration-500 ease-out">
                  <h2 className="text-lg font-mantropeFont font-normal text-neutral-700 italic">
                    National Champion
                  </h2>
                  <h1 className="text-6xl font-bebasNeue">
                    5<span className="text-5xl">x</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-transparent w-full h-full p-5 py-10 rounded-2xl row-start-4 lg:row-start-auto row-span-1 lg:col-span-5">
              <h3 className="inline-flex text-xl font-mantropeFont">
                Favorite quote
                <span className="">
                  <BsChatQuote className="size-7 translate-x-3 -translate-y-3" />
                </span>
              </h3>
              <h1 className="text-foreground px-2 font-semibold text-lg mt-5">
                &quot;The people who are crazy enough to think they can change
                the world are the ones who do.&quot;
              </h1>
              <h3 className="pl-3 text-neutral-500">- Steve Jobs</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#F1F0EA] to-white w-screen h-screen flex justify-center items-star items-start pt-60  p-10">
        <div className="w-full max-w-5xl flex flex-col justify-start items-start">
          <div className="flex flex-col justify-start items-start pb-5">
            <h3 className="text-xl uppercase">Profesional</h3>
            <h1 className="text-5xl xl:text-6xl font-normal tracking-tighter">
              Experience
            </h1>
          </div>
          <p>
            I don&apos;t have any professional experience yet, but I&apos;ve
            been working on some personal projects that I&apos;m really proud
            of. It&apos;s given me a chance to explore and build my skills, and
            I&apos;ve learned a lot along the way. I&apos;m super eager to keep
            learning, take on new challenges, and collaborate with others to
            create something awesome.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
