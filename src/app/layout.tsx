import type { Metadata } from "next";
import { Bebas_Neue, Big_Shoulders_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/content/navbar";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bigShoulders = Big_Shoulders_Display({
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sebastjan Bas | Full Stack Developer",
    template: "%s | Sebastjan Bas",
  },
  description:
    "Full-stack developer specializing in Next.js, React, and Supabase. Passionate about building scalable web applications with modern technologies. Explore my portfolio to see my work!",
  metadataBase: new URL("https://www.sebastjanbas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com",
    siteName: "Sebastjan Bas | Full Stack Developer",
    images: [
      {
        url: "/open-graph-photo.png",
        width: 4096,
        height: 2304,
        alt: "Sebastjan Bas Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sebastjanbas",
    creator: "@sebastjanbas",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
