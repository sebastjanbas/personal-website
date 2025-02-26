import DisplayAge from "@/components/content/get-age";
import TechStackBackground from "@/components/ui/techstack-background";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="w-screen h-screen">
        <div className="absolute overflow-hidden z-0 opacity-20 w-screen h-screen inset-0">
          <div className="relative rotate-[20deg] scale-[1.3] -translate-x-20 -translate-y-20">
            <TechStackBackground />
          </div>
        </div>
        <div className="relative z-50 flex flex-col w-full h-full justify-start items-start pt-20 p-5 sm:p-10">
          <div className="flex flex-row lg:gap-x-10 justify-between items-center">
            <h1 className="text-3xl lg:text-7xl leading-[15px] tracking-tight text-foreground font-bebasNeue">
              Hi! my name is <br />
              <strong className="text-7xl lg:text-9xl text-foreground font-bebasNeue">
                Sebastjan Bas
              </strong>
            </h1>
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
          <p className="text-sm">
            I am a <DisplayAge /> year old software engineer passionate about
            making an impact on the world through technology.
          </p>
        </div>
      </section>
      <section className="w-screen h-screen">
        <div className="flex justify-center items-center">
          <h1 className="text-7xl lg:text-[200px] text-foreground font-bebasNeue">
            Who am I
          </h1>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
