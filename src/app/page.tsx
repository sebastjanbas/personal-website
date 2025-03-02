import HeroSection from "@/components/content/herro-section";
import TechSteckContainer from "@/components/content/tech-stack-container";
import { LogoList } from "@/lib/docs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-start text-foreground font-bold font-bebasNeue">
          Tech stack
        </h1>
        <div className="grid grid-cols-4 grid-rows-3 gap-5">
          {LogoList.map((logo) => (
            <TechSteckContainer
              key={logo.name}
              name={logo.name}
              description={logo.description}
              Logo={logo.Component}
            />
          ))}
        </div>
      </section>
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-end text-foreground font-bold font-bebasNeue">
          Portfolio
        </h1>
      </section>
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-center text-foreground font-bold font-bebasNeue">
          Areas I wish to explore
        </h1>
      </section>
    </>
  );
}
