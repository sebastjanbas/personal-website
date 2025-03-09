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
import { DatabaseIcon, LockIcon, PaintRollerIcon } from "lucide-react";

export type LogoProps = {
  color: boolean;
  className?: string;
};

export const sharedMetadata = [
  {
    twitter: {
      card: "summary_large_image",
      site: "@sebastjanbas",
      creator: "@sebastjanbas",
    },
  },
  {
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },
];

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
    image: "/slovene-sbs-mockup.png",
    imageLink: "https://slovene-step-by-step.vercel.app",
    href: "/projects/slovene-step-by-step",
    description: "A language learning platform.",
    type: "professional",
    stats: [
      { id: 1, icon: LockIcon, desc: "Authentication" },
      { id: 2, icon: PaintRollerIcon, desc: "Beautiful design" },
      {
        id: 3,
        icon: DatabaseIcon,
        desc: "Video Content on demand",
      },
    ],
  },
  {
    id: 2,
    name: "E - Library",
    image: "#",
    imageLink: "#",
    href: "/projects/elibrary",
    description: "A digital bookshelf for organizing physical books.",
    type: "personal",
    stats: []
  },
  {
    id: 3,
    name: "Turnament Hub",
    image: "#",
    imageLink: "#",
    href: "/projects/turnament-hub",
    description:
      "A social tournament app for organizing competitions with friends and family.",
    type: "personal",
    stats: []
  },
];

export const portfolioStats = [
  { id: 1, name: "Over", value: "3+", desc: "projects finished" },
  { id: 2, name: "Over", value: "4+", desc: "years of programing experience" },
];
