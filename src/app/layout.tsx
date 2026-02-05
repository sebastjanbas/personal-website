import type { Metadata } from "next";
import {
  Bebas_Neue,
  // Big_Shoulders_Display,
  DM_Serif_Display,
  Manrope,
  Roboto,
  Sigmar,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import BackgroundUpdater from "@/components/ui/bacground-updater";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import LenisProvider from "@/components/providers/lenis-provider";

const bebasNeueFont = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--next-font-bebasNeue"
});
const robotoFont = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--next-font-roboto"
});
const sigmarFont = Sigmar({
  weight: "400",
  subsets: ["latin"],
  variable: "--next-font-sigmar"
});
const manropeFont = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--next-font-manrope"
});
const dmDisplayFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--next-font-dmDisplay"
});
// const bigShoulders = Big_Shoulders_Display({
//   weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

const interDisplayFont = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-display/InterDisplay-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-display/InterDisplay-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--next-font-interDisplay',
})

export const metadata: Metadata = {
  title: {
    default: "Sebastjan Bas | Software Engineer",
    template: "%s | Sebastjan Bas",
  },
  description:
    "I am a software engineer and full-stack developer passionate about creating fun and engaging applications that impact the world. Explore my portfolio to see my work!",
  metadataBase: new URL("https://www.sebastjanbas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com",
    siteName: "Sebastjan Bas | Software Engineer",
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
    <html lang="en" className={`${manropeFont.variable} ${bebasNeueFont.variable} ${robotoFont.variable} ${sigmarFont.variable} ${dmDisplayFont.variable} ${interDisplayFont.variable}`}>
      <head>
        <title></title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="overflow-x-hidden font-interDisplay tracking-tight bg-dark-gray">
        <LenisProvider>
          <BackgroundUpdater />
          <Toaster position="top-center" richColors />
          {children}
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  );
}
