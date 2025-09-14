"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectList } from "@/lib/docs";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    image: string;
    href: string;
    tech: string;
    type: string;
    year: string;
    description: string;
  };
  index: number;
}

const MAX_TINT = 0.3;

const ProjectsSection = () => {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      const ease = gsap.parseEase("power2.out");

      panels.forEach((panel, i) => {
        panel.style.zIndex = String(100 + i);

        // 1) Pin each panel and SNAP when its top hits 10% from viewport top
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
        });

        // 2) Smoothly tint PREVIOUS panel as THIS panel begins overlapping it
        if (i > 0) {
          const prevPanel = panels[i - 1] as HTMLElement;
          const prevTint = prevPanel.querySelector<HTMLElement>(".tint");
          const setOpacity = prevTint
            ? gsap.quickSetter(prevTint, "opacity")
            : null;

          ScrollTrigger.create({
            trigger: panel,
            start: "top bottom", // next panel just touches bottom of viewport
            end: "top top", // until it reaches the pin start line
            onUpdate: (self) => {
              if (!setOpacity) return;
              const o = gsap.utils.clamp(
                0,
                MAX_TINT,
                ease(self.progress) * MAX_TINT
              );
              setOpacity(o);
            },
            onLeaveBack: () => {
              if (setOpacity) setOpacity(0); // fully clear when scrolling back before overlap
            },
            onLeave: () => {
              if (setOpacity) setOpacity(MAX_TINT); // keep max tint once next panel is pinned
            },
          });
        }

        // ensure current panel isn't tinted initially
        const myTint = panel.querySelector<HTMLElement>(".tint");
        if (myTint) gsap.set(myTint, { opacity: 0 });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="container"
      className="relative w-full overflow-hidden"
    >
      {/* Intro */}
      <div className="flex items-center justify-center px-5 sm:px-10 mb-20">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-dmDisplay tracking-tight">
            Experience
          </h1>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
      </div>

      {/* Project cards */}
      {ProjectList.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
      <div className="h-screen"></div>
    </section>
  );
};

export default ProjectsSection;

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="panel relative bg-white rounded-[3rem] w-full min-h-screen p-5 md:p-10 py-20 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10">
      <div className="tint pointer-events-none absolute inset-0 bg-black opacity-0 will-change-[opacity]" />
      <h4 className="text-[80px] sm:text-[120px] md:text-[300px] font-dmDisplay leading-none w-full text-center md:text-left md:w-1/2">
        {project.id.toString().padStart(2, "0")}
      </h4>
      <div className="w-full h-full flex flex-col items-start justify-start">
        <p className="text-lg uppercase text-blue-400">{project.type}</p>
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <h1 className="text-4xl md:text-7xl font-dmDisplay tracking-tight inline-flex items-center gap-2">
            {project.name}{" "}
            <Link href={project.href}>
              <ArrowRight className="w-8 h-8 rotate-45" />
            </Link>
          </h1>
          <h2 className="text-2xl font-dmDisplay">{project.year}</h2>
        </div>
        <div className="flex flex-row items-start justify-center w-full py-10">
          {project.image !== "#" ? (
            <div className="relative w-full h-auto aspect-video max-w-3xl rounded-[2rem] lg:rounded-[3rem] overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-auto aspect-video max-w-3xl bg-slate-100 rounded-[2rem] lg:rounded-[3rem] flex items-center justify-center border border-slate-200">
              <p className="text-slate-400 font-bebasNeue tracking-widest text-lg">
                COMING SOON
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-row items-start justify-between w-full mb-10">
          <p className="text-lg md:text-2xl">{project.description}</p>
        </div>
        <div className="flex flex-row items-start justify-between w-full">
          <p className="text-base md:text-xl tracking-wide italic">
            {project.tech}
          </p>
        </div>
      </div>
    </div>
  );
};
