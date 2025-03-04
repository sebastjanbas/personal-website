import { DjangoLogo } from "@/components/Logos/django-logo"
import { DockerLogo } from "@/components/Logos/docker-logo"
import { ElectronLogo } from "@/components/Logos/electron-logo"
import { Figma } from "@/components/Logos/figma"
import Git from "@/components/Logos/git"
import { NextJsLogo } from "@/components/Logos/nextjs-logo"
import { PostGreSql } from "@/components/Logos/postgresql-logo"
import { ReactLogo } from "@/components/Logos/react-logo"
import { SupabaseLogo } from "@/components/Logos/supabase-logo"
import { TailwindLogo } from "@/components/Logos/tailwind-logo"
import { TypescriptLogo } from "@/components/Logos/tyoescript-logo"

export type LogoProps = {
  color: boolean
}

export const navigation = [
  { name: "Work", href: "/work", stayOpen: false },
  { name: "contact", href: "mailto:sebastjan.bas@gmail.com", stayOpen: true },
  { name: "About", href: "/about", stayOpen: false },
]

export const LogoList = [
  { name: "Figma", Component: Figma, description: "Design Tool", href: "https://www.figma.com/" },
  { name: "Git", Component: Git, description: "Version Control", href: "https://git-scm.com/" },
  { name: "React", Component: ReactLogo, description: "Frontend Library", href: "https://react.dev/" },
  { name: "Tailwind", Component: TailwindLogo, description: "CSS Framework", href: "https://tailwindcss.com/" },
  { name: "Typescript", Component: TypescriptLogo, description: "Javascript typesafe", href: "https://www.typescriptlang.org/" },
  { name: "Supabase", Component: SupabaseLogo, description: "Backend Tool", href: "https://supabase.com/" },
  { name: "Postgresql", Component: PostGreSql, description: "Relational Database", href: "https://www.postgresql.org/" },
  { name: "Django", Component: DjangoLogo, description: "Backend Python Framework", href: "https://www.djangoproject.com/" },
  { name: "Docker", Component: DockerLogo, description: "Containerization Platform", href: "https://www.docker.com/" },
  { name: "Nextjs", Component: NextJsLogo, description: "React Framework", href: "https://nextjs.org/" },
  { name: "Electron", Component: ElectronLogo, description: "Desktop development tool", href: "https://www.electronjs.org/" },
  { name: "React Native", Component: ReactLogo, description: "Mobile app development tool", href: "https://reactnative.dev/" }
]


export const ProjectList = [
  { id: 1, name: "Slovene Step By Step", image: "/open-graph-photo.png", title: "Slovene Step By Step", href: "#", description: "Project description", type: "professional" },
  { id: 2, name: "Project Name", image: "/open-graph-photo.png", title: "Project Title", href: "#", description: "Project description", type: "personal" },
  { id: 3, name: "Project Name", image: "/open-graph-photo.png", title: "Project Title", href: "#", description: "Project description", type: "personal" },
  { id: 4, name: "Project Name", image: "/open-graph-photo.png", title: "Project Title", href: "#", description: "Project description", type: "personal" },
  // { id: 5, name: "Project Name", image: "/open-graph-photo.png", title: "Project Title", href: "#", description: "Project description", type: "personal" },
  // { id: 6, name: "Project Name", image: "/open-graph-photo.png", title: "Project Title", href: "#", description: "Project description", type: "personal" },
  // { id: 7, name: "Project Name", image: "/open-graph-photo.png", title: "Project Title", href: "#", description: "Project description", type: "personal" },
]
