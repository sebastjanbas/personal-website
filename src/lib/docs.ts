import Github from "@/components/Logos/social-media/github";
import Instagram from "@/components/Logos/social-media/instagram";
import LinkedIn from "@/components/Logos/social-media/linked-in";
import XLogo from "@/components/Logos/social-media/x";
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
    name: "ELibrary",
    image: "#",
    imageLink: "#",
    href: "#",
    // href: "/projects/elibrary",
    description: "A digital bookshelf for organizing physical books.",
    type: "personal",
    stats: []
  },
  {
    id: 3,
    name: "Turnament Hub",
    image: "#",
    imageLink: "#",
    href: "#",
    // href: "/projects/turnament-hub",
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
