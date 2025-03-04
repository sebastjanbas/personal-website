import HeroSection from "@/components/content/herro-section";
import ProjectContainer from "@/components/content/project-container";
import TechSteckContainer from "@/components/content/tech-stack-container";
import { LogoList, ProjectList } from "@/lib/docs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-start text-foreground font-bold font-bebasNeue">
          Tech stack
        </h1>
        <div className="grid pt-12 grid-cols-2 grid-rows-6 lg:grid-cols-4 lg:grid-rows-3 gap-5">
          {LogoList.map((logo) => (
            <TechSteckContainer
              key={logo.name}
              name={logo.name}
              description={logo.description}
              Logo={logo.Component}
              href={logo.href}
            />
          ))}
        </div>
      </section>
      <section className="h-fit w-screen p-5 md:p-10 xl:p-20">
        <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-end text-foreground font-bold font-bebasNeue">
          Portfolio
        </h1>
        <div className="flex flex-col">
          {ProjectList.map((project) => (
            <div key={project.id}>
              <div className="flex justify-self-center self-center m-3 h-[1px] w-full bg-foreground opacity-20"></div>
              <ProjectContainer
                image={project.image}
                title={project.title}
                href={project.href}
                description={project.description}
                type={project.type}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-center text-foreground font-bold font-bebasNeue">
          Areas I wish to explore
        </h1>
      </section>
    </>
  );
}
