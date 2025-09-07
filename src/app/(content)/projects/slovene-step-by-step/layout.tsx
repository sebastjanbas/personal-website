import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slovene Step By Step",
  description:
    "A modern, multilingual online language learning platform designed to help users master Slovenian through personalized lessons, interactive features, and community support. Built with Next.js 15, TypeScript, and modern web technologies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com/projects/slovene-step-by-step",
    siteName: "Slovene Step By Step | Sebastjan Bas",
    images: [
      {
        url: "/slovene-step-by-step-landing-page.png",
        width: 3824,
        height: 2334,
        alt: "Slovene Step By Step Project Image",
      },
    ],
  },
  ...sharedMetadata,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
