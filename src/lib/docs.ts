/* eslint-disable @typescript-eslint/no-unused-vars */
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
    { name: "Figma", Component: Figma, description: "Design Tool" },
    { name: "Git", Component: Git, description: "Version Control" },
    { name: "React", Component: ReactLogo, description: "Frontend Library" },
    { name: "Tailwind", Component: TailwindLogo, description: "CSS Framework" },
    { name: "Typescript", Component: TypescriptLogo, description: "Javascript typesafe" },
    { name: "Supabase", Component: SupabaseLogo, description: "Backend Tool" },
    { name: "Postgresql", Component: PostGreSql, description: "Relational Database" },
    { name: "Django", Component: DjangoLogo, description: "Backend Python Framework" },
    { name: "Docker", Component: DockerLogo, description: "Containerization Platform" },
    { name: "Nextjs", Component: NextJsLogo, description: "React Framework" },
    { name: "Electron", Component: ElectronLogo, description: "Desktop development tool" },
    { name: "React Native", Component: ReactLogo, description: "Mobile app development tool" }
]
