import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Montserrat, Tektur } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const tektur = Tektur({
  subsets: ["latin", "cyrillic"],
  variable: "--font-tektur",
});

type Props = {
  children: ReactNode;
};

const BASE_URL = "https://indevix.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "Indevix | %s",
    default: "IT Services & Web Development Company",
  },
  description:
    "We build custom web and AI solutions for businesses. From automation to CRM and software — we turn complex processes into efficient systems.",
  keywords:
    "web development company, custom software development, AI automation for business, business process automation software, web app development for startups, AI integration for websites, digital transformation partner, CRM and ERP software development, AI chatbot and workflow automation, business automation solutions for SMEs",
  alternates: {
    canonical: "/en",
    languages: {
      en: `${BASE_URL}/en`,
      ru: `${BASE_URL}/ru`,
      tr: `${BASE_URL}/tr`,
      ky: `${BASE_URL}/ky`,
      "x-default": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    url: "/en",
    title: "Indevix - IT Services & Web Development Company",
    description:
      "We build custom web and AI solutions for businesses. From automation to CRM and software — we turn complex processes into efficient systems.",
    siteName: "Indevix",
    locale: "en",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Indevix OG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indevix - IT Services & Web Development Company",
    description:
      "Boost your business with tailored IT solutions. Web development, automation, custom software, and 24/7 support. Trusted by 50+ companies.",
    images: ["/og-image.png"],
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

export default function RootLayout({ children }: Props) {
  return (
    <html className="min-h-full scroll-smooth" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${montserrat.className} ${tektur.variable} flex min-h-full flex-col bg-background`}
      >
        <div id="modal-root" />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
