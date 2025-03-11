import HeroSection from "@/components/content/herro-section";
import ProjectContainer from "@/components/content/project-container";
import TechStackSection from "@/components/content/tech-stack-section";
import { ProjectList } from "@/lib/docs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <section className="flex flex-col justify-center items-center h-fit w-screen p-5 sm:p-10">
        <div className="w-full flex flex-col justify-start mt-20 items-start">
          <h1 className="font-bebasNeue tracking-widest">Relevant projects</h1>
        </div>
      </section>
      {ProjectList.map((project) => (
        <section
          key={project.id}
          className={`h-fit w-screen px-5 sm:px-10 flex flex-col justify-center items-center`}
        >
          <div className="w-full h-full">
            <ProjectContainer
              id={project.id}
              image={project.image}
              year={project.year}
              name={project.name}
              href={project.href}
              tech={project.tech}
              type={project.type}
            />
          </div>
        </section>
      ))}

      {/* <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className=" bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-5xl lg:text-7xl text-start tracking-tight text-transparent font-semibold font-bebasNeue">
          Areas I wish to explore
        </h1>
      </section> */}
    </>
  );
}
