import Github from "@/components/Logos/social-media/github";
import Instagram from "@/components/Logos/social-media/instagram";
import LinkedIn from "@/components/Logos/social-media/linked-in";
import XLogo from "@/components/Logos/social-media/x";

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
    image: "/slovene-step-by-step-landing-page.png",
    href: "/projects/slovene-step-by-step",
    type: "Individual Project - Freelance",
    year: "2024 - Present",
    description: "A modern, multilingual online language learning platform designed to help users master Slovenian through personalized lessons, interactive features, and community support."
  },
  {
    id: 2,
    name: "Movie App",
    image: "#",
    href: "/projects/movie-app",
    type: "Teads Summer School Project",
    year: "July, 2025",
    description: "A modern Angular application for browsing, searching, and managing movie collections with playlist functionality. This frontend interfaces with the MovieApp backend, which is built using Java and Spring Boot. It provides an intuitive experience for movie enthusiasts to discover films and organize them into custom playlists."
  },
  {
    id: 3,
    name: "Discord Bot",
    image: "#",
    href: "/projects/discord-bot",
    type: "Personal Project",
    year: "2021 - 2022",
    description: "A feature-rich Discord bot built with Python and discord.py, featuring music playback, Amazon product scraping, and entertainment commands. Originally developed in 2021-2022 as a comprehensive server management tool."
  },
];

export const portfolioStats = [
  { id: 1, name: "Over", value: "3+", desc: "projects finished" },
  { id: 2, name: "Over", value: "4+", desc: "years of programing experience" },
];
