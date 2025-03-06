import HeroSection from "@/components/content/herro-section";
import ProjectContainer from "@/components/content/project-container";
import TechStackSection from "@/components/content/tech-stack-section";
import { ProjectList } from "@/lib/docs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <section className="h-fit w-screen p-5 md:p-10 xl:p-20 mb-[15px]">
        <h1 className=" bg-clip-text bg-gradient-to-b from-black via-slate-500 to-white text-7xl md:text-[150px] lg:text-[180px] text-end tracking-tight text-transparent font-semibold font-bebasNeue">
          Portfolio
        </h1>
        <h2 className="font-robotoFont font-normal text-md lg:text-lg text-end pb-5">
          Convallis ut, nunc consectetur sit
        </h2>
        <p className="font-robotoFont font-normal text-sm text-end">
          Velit consequat laoreet sed etiam in praesent, varius est dui. Ante
          ultricies risus, at, nibh purus parturient luctus porta est. Velit
        </p>
      </section>
      {ProjectList.map((project) => (
        <section
          key={project.id}
          className={`h-fit w-screen ${project.id === 1 ? "bg-gradient-to-b from-white to-[#F5F5F7]": "bg-[#F5F5F7]"} p-5 md:p-10 xl:p-20 mb-[15px]`}
        >
          <ProjectContainer
            image={project.image}
            name={project.name}
            href={project.href}
            description={project.description}
            type={project.type}
          />
        </section>
      ))}
      <section className="h-screen w-screen p-5 md:p-10 xl:p-20">
        <h1 className="text-7xl md:text-[150px] lg:text-[200px] text-center text-foreground font-bold font-bebasNeue">
          Areas I wish to explore
        </h1>
      </section>
    </>
  );
}
