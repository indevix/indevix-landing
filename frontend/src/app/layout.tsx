import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Montserrat, Tektur } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const tektur = Tektur({
  subsets: ["latin", "cyrillic"],
  variable: "--font-tektur",
});

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: "Indevix",
  description: "Professional software development company",
};

export default function RootLayout({ children }: Props) {
  return (
    <html className="min-h-full">
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
