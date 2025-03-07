import DisplayAge from "@/components/content/get-age";
import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";
import Image from "next/image";
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
      <section className="w-screen h-screen p-5 md:p-10 xl:p-20">
        <div className="relative z-50 flex flex-col w-full h-full justify-center items-center pt-20 p-5 sm:p-10">
          <div className="flex flex-row max-w-7xl gap-x-20 justify-between items-center">
            <div>
              <h1 className="text-3xl lg:text-7xl leading-[15px] tracking-tight text-foreground font-bebasNeue">
                Hi my name is <br />
                <strong className="text-7xl lg:text-9xl text-foreground font-bebasNeue">
                  Sebastjan Bas
                </strong>
              </h1>
              <p className="text-sm">
                I am a <DisplayAge /> year old software engineer and full-stack
                developer from Slovenia. I am passionate about creating fun and
                engaging applications that improve how people interact with the
                world. Track and Field have been a big and important part of my
                life, shaping my discipline and determination.
              </p>
            </div>
            <Image
              className="hidden lg:block"
              width={600}
              height={400}
              src={
                "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
              }
              alt="Photo of Sebastjan Bas"
            />
          </div>
        </div>
      </section>
      <section className="w-screen h-screen p-5 md:p-10 xl:p-20">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-foreground font-bold font-bebasNeue">
            How I started
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-20 w-fulll h-fit items-start">
            <p className="text-sm text-justify max-w-sm sm:max-w-md md:max-w-xs">
              My journey into software engineering started when I was 17 years
              old and wanted to build a bot for my high school discord server.
              Building a piece of software that other people use and enjoy made
              me fall in love with programming.
            </p>
            <p className="text-sm text-justify max-w-sm sm:max-w-md md:max-w-xs">
              I pursued my education in Computer Science at the University of
              Ljubljana for one semester, after which I continued my education
              at the University of Idaho, where I am currently studying.
            </p>
            <p className="text-sm text-justify max-w-sm sm:max-w-md md:max-w-xs">
              I am currently working on several full-stack projects and learning
              about new technologies. I am ambitious and driven and would love
              to be a part of a software development team.
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <div>
          <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-foreground font-bold font-bebasNeue">
            Professional Experience
          </h1>
          <p>TODO</p>
        </div>
      </section>
      <section className="w-screen h-screen p-5 md:p-10 xl:p-20">
        <div>
          <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-end text-foreground font-bold font-bebasNeue">
            Sport Achievements
          </h1>
          <div>
            <p className="text-sm text-end">
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
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <div>
          <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-center text-foreground font-bold font-bebasNeue">
            Plans for the future
          </h1>
          <div>
            <p className="text-sm text-center">
              My goal is to continue developing impactful software solutions
              while growing as a software engineer. I’m always open to new
              opportunities and collaborations—feel free to connect with me!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
