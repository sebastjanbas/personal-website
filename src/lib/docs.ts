import { DjangoLogo } from "@/components/Logos/django-logo"
import { DockerLogo } from "@/components/Logos/docker-logo"
import { ElectronLogo } from "@/components/Logos/electron-logo"
import { Figma } from "@/components/Logos/figma"
import Git from "@/components/Logos/git"
import { Illustrator } from "@/components/Logos/illustrator"
import { NextJsLogo } from "@/components/Logos/nextjs-logo"
import { PostGreSql } from "@/components/Logos/postgresql-logo"
import { ReactLogo } from "@/components/Logos/react-logo"
import { SupabaseLogo } from "@/components/Logos/supabase-logo"
import { TailwindLogo } from "@/components/Logos/tailwind-logo"
import { TypescriptLogo } from "@/components/Logos/tyoescript-logo"

export const navigation = [
    {name: "Work", href: "/work", stayOpen: false},
    {name: "contact", href: "mailto:sebastjan.bas@gmail.com", stayOpen: true},
    {name: "About", href: "/about", stayOpen: false},
]

export const backgroundLogos = [
    {name: "Figma", Component: Figma},
    {name: "Illustrator", Component: Illustrator},
    {name: "Git", Component: Git},
    {name: "React", Component: ReactLogo},
    {name: "Tailwind", Component: TailwindLogo},
    {name: "Typescript", Component: TypescriptLogo},
    {name: "Supabase", Component: SupabaseLogo},
    {name: "Postgresql", Component: PostGreSql},
    {name: "Django", Component: DjangoLogo},
    {name: "Docker", Component: DockerLogo},
    {name: "Nextjs", Component: NextJsLogo},
    {name: "Electron", Component: ElectronLogo},
]