import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Archivo, DM_Mono, Public_Sans } from "next/font/google";
import { AmazonClicks } from "@/components/AmazonClicks";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  variable: "--font-public",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Robot mowers ranked by lawn size and slope",
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "A US guide to robot lawn mowers, ranked by the lawn size and slope each model is rated for.",
  applicationName: SITE_NAME,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable} ${dmMono.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <AmazonClicks />
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
