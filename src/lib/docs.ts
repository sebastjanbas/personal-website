import { DjangoLogo } from "@/components/Logos/django-logo";
import { DockerLogo } from "@/components/Logos/docker-logo";
import { ElectronLogo } from "@/components/Logos/electron-logo";
import { Figma } from "@/components/Logos/figma";
import Git from "@/components/Logos/git";
import { NextJsLogo } from "@/components/Logos/nextjs-logo";
import { PostGreSql } from "@/components/Logos/postgresql-logo";
import { ReactLogo } from "@/components/Logos/react-logo";
import Github from "@/components/Logos/social-media/github";
import Instagram from "@/components/Logos/social-media/instagram";
import LinkedIn from "@/components/Logos/social-media/linked-in";
import XLogo from "@/components/Logos/social-media/x";
import { SupabaseLogo } from "@/components/Logos/supabase-logo";
import { TailwindLogo } from "@/components/Logos/tailwind-logo";
import { TypescriptLogo } from "@/components/Logos/tyoescript-logo";

export type LogoProps = {
  color: boolean;
};

export const socialMedia = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/sebastjanbas",
    Component: Github,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sebastjan-bas-604b5b271/",
    Component: LinkedIn,
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://www.instagram.com/sebastjan.bas/",
    Component: Instagram,
  },
  { id: 4, name: "X", href: "https://x.com/SebastjanBas", Component: XLogo },
];

export const navigation = [
  { name: "Work", href: "/work", stayOpen: false },
  { name: "contact", href: "mailto:sebastjan.bas@gmail.com", stayOpen: true },
  { name: "About", href: "/about", stayOpen: false },
];

export const LogoList = [
  {
    name: "Figma",
    Component: Figma,
    description: "Design Tool",
    href: "https://www.figma.com/",
  },
  {
    name: "Git",
    Component: Git,
    description: "Version Control",
    href: "https://git-scm.com/",
  },
  {
    name: "React",
    Component: ReactLogo,
    description: "Frontend Library",
    href: "https://react.dev/",
  },
  {
    name: "Tailwind",
    Component: TailwindLogo,
    description: "CSS Framework",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Typescript",
    Component: TypescriptLogo,
    description: "Javascript typesafe",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Supabase",
    Component: SupabaseLogo,
    description: "Backend Tool",
    href: "https://supabase.com/",
  },
  {
    name: "Postgresql",
    Component: PostGreSql,
    description: "Relational Database",
    href: "https://www.postgresql.org/",
  },
  {
    name: "Django",
    Component: DjangoLogo,
    description: "Backend Python Framework",
    href: "https://www.djangoproject.com/",
  },
  {
    name: "Docker",
    Component: DockerLogo,
    description: "Containerization Platform",
    href: "https://www.docker.com/",
  },
  {
    name: "Nextjs",
    Component: NextJsLogo,
    description: "React Framework",
    href: "https://nextjs.org/",
  },
  {
    name: "Electron",
    Component: ElectronLogo,
    description: "Desktop development tool",
    href: "https://www.electronjs.org/",
  },
  {
    name: "React Native",
    Component: ReactLogo,
    description: "Mobile app development tool",
    href: "https://reactnative.dev/",
  },
];

export const ProjectList = [
  {
    id: 1,
    name: "Slovene Step By Step",
    image: "/slovene-step-by-step-landing-page.png",
    imageLink: "https://slovene-step-by-step.vercel.app",
    href: "/slovene-step-by-step",
    description:
      "A language learning platform built with Next.js and Supabase, offering structured course lectures similar to Udemy. Supports multilingual learning with next-intl and features a responsive, user-friendly design. Migrated from Django to Next.js for improved performance and scalability.",
    type: "professional",
  },
  {
    id: 2,
    name: "E - Library",
    image: "#",
    imageLink: "#",
    href: "/elibrary",
    description:
      "A digital bookshelf for organizing physical books in a personal database, categorized into virtual rooms for easy access. Still in development, the platform will allow users to search, manage, and share book collections with friends and family. Features include room-based organization, book metadata storage, and seamless sharing options, ensuring books are always easy to find.",
    type: "personal",
  },
  {
    id: 3,
    name: "Turnament Hub",
    image: "#",
    imageLink: "#",
    href: "/turnament-hub",
    description:
      "A social tournament app for organizing competitions with friends and family across various sports. Still in development, the app will let users create custom tournaments, choose from different tournament formats (round-robin, knockout, etc.), and track match results in real time. Additional planned features include automated bracket generation, customizable scoring systems, and live match updates, making it easy to manage and enjoy competitive play.",
    type: "personal",
  },
];
