import HeroSection from "@/components/content/herro-section";
import ProjectContainer from "@/components/content/project-container";
import TechStackSection from "@/components/content/tech-stack-section";
import { ProjectList } from "@/lib/docs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <section className="h-fit w-screen p-10 flex flex-col justify-end my-20 items-end md:p-10 xl:p-20">
        <h1 className="bg-clip-text bg-gradient-to-l from-[#042943] to-[#8ED3EA] text-6xl lg:text-8xl text-start text-transparent pb-2 font-semibold tracking-tighter">
          Portfolio
        </h1>
        <h2 className="text-lg font-robotoFont font-normal text-end pb-4">
          Building what’s missing with purpose-driven solutions.
        </h2>
        {/* <p className="font-robotoFont font-normal text-sm text-end md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[50%]">
          Every project I build comes from a real need—something I felt was
          missing. I create software that makes technology easier to use.
          Whether it’s a web app or a personal project, my goal is to build
          simple, useful, and impactful solutions. Every project reflects my
          passion for problem-solving, efficiency, and design. Take a look at my
          work and see it in action!
        </p> */}
        <div>{/*           <StatsContainer /> */}</div>
      </section>
      {ProjectList.map((project) => (
        <section
          key={project.id}
          className={`h-fit w-screen ${project.id === 1 ? "bg-gradient-to-b from-white to-[#F5F5F7]" : "bg-[#F5F5F7]"} mb-[15px]`}
        >
          <div className="w-full h-full">
            <ProjectContainer
              image={project.image}
              imageLink={project.imageLink}
              name={project.name}
              href={project.href}
              description={project.description}
              type={project.type}
            />
          </div>
        </section>
      ))}
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className=" bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-7xl md:text-[150px] lg:text-[180px] text-start tracking-tight text-transparent font-semibold font-bebasNeue">
          Areas I wish to explore
        </h1>
      </section>
    </>
  );
}
