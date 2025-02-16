import React from "react";
import SocialMedia from "../ui/social-media";
import { ImageBackground } from "../ui/image-background";

const HeroSection = () => {
  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-t from-teal-600 to-sky-900">
        <ImageBackground />
        <div className="relative w-full h-full z-20 flex justify-center items-center translate-y-10">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <div
              className="text-white font-bebasNeue text-lg text-center leading-none -translate-y-1 
  after:block after:h-[1px] after:origin-left after:scale-x-0 after:bg-white 
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
              font-bebasNeue text-white text-center
              text-7xl leading-[40px]
              sm:text-[115px] sm:leading-[70px] sm:tracking-[-4px]
              lg:text-[180px] lg:leading-[105px] lg:tracking-[-5px]
              "
              >
                Sebastjan Bas
              </h1>
              <h3
                className="
              font-bebasNeue text-white text-center
              text-2xl tracking-wide
              sm:text-2xl sm:tracking-[5px]
              lg:tracking-[12.5px]
              "
              >
                Full stack developer and web designer
              </h3>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </section>
      <div className="hidden md:block h-[120px] bg-teal-600"></div>
    </>
  );
};

export default HeroSection;
