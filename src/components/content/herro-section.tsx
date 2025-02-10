import Image from "next/image";
import React from "react";
import SocialMedia from "../ui/social-media";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-green-900 to-green-500">
      <div className="absolute z-0 flex justify-center items-center top-0 h-screen w-screen bg-transparent overflow-hidden ">
        <Image
          src={"/personal-photo3.svg"}
          width={2000}
          height={2000}
          alt="Photo of Sebastjan Bas"
          className="
            w-full h-full object-cover
            scale-[1.3] translate-y-32 opacity-[60%] md:opacity-[100%] md:scale-[0.85]
            md:translate-y-20 md:object-[50%_20%]
        "
        />
      </div>
      <div className="relative w-full h-full z-20 flex justify-center items-center translate-y-10 md:translate-y-32">
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-20 gap-y-5">
          <div>
            <h1 className="text-white font-bebasNeue text-center">
              Download CV
            </h1>
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
    </div>
  );
};

export default HeroSection;
