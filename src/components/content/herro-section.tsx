import React from "react";
import SocialMedia from "../ui/social-media";
import { ImageBackground } from "../ui/image-background";

const HeroSection = () => {
  return (
    <>
      <section className="h-[calc(100vh+120px)] w-screen">
        <ImageBackground />
        <div className="relative w-full h-full z-20 flex justify-center items-center translate-y-10">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <div
              className="text-foreground font-bebasNeue text-lg text-center leading-none -translate-y-2 
  after:block after:h-[1px] after:origin-left after:scale-x-0 after:bg-foreground 
  after:transition-transform after:duration-500 
  hover:after:scale-x-100 hover:tracking-wider transition-all will-change-transform"
            >
              <a
                href="https://docs.google.com/document/d/1peoHs2uNtDp4bT8fS7wZnrPKTzGBYnTQbRC7RwZrg1k/export?format=pdf"
                download
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-col">
              <h1
                className="
              font-bebasNeue text-foreground text-center
              text-7xl leading-[50px]
              sm:text-[145px] sm:leading-[80px] sm:tracking-[-7px]
              lg:text-[230px] lg:leading-[135px] lg:tracking-[-5px]
              "
              >
                Sebastjan Bas
              </h1>
              <h3
                className="
              font-bebasNeue text-foreground text-center
              text-2xl tracking-wider
              sm:text-2xl sm:tracking-[7.5px]
              lg:text-3xl
              lg:tracking-[16.5px]
              "
              >
                Software Engineer | Full-stack developer
              </h3>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
