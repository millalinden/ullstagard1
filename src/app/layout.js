"use client";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

// Importing Erode font
const erode = localFont({
  src: [
    {
      path: "../../public/font/Erode-Variable.ttf",
      weight: "300",
    },
    {
      path: "../../public/font/Erode-Variable.ttf",
      weight: "400",
    },
    {
      path: "../../public/font/Erode-Variable.ttf",
      weight: "500",
    },
    {
      path: "../../public/font/Erode-Variable.ttf",
      weight: "600",
    },
    {
      path: "../../public/font/Erode-Variable.ttf",
      weight: "700",
    },
  ],
  variable: "--font-erode",
});

// Importing Satoshi font
const satoshi = localFont({
  src: [
    {
      path: "../../public/font/Satoshi-Variable.ttf",
      weight: "300",
    },
    {
      path: "../../public/font/Satoshi-Variable.ttf",
      weight: "400",
    },
    {
      path: "../../public/font/Satoshi-Variable.ttf",
      weight: "500",
    },
    {
      path: "../../public/font/Satoshi-Variable.ttf",
      weight: "600",
    },
    {
      path: "../../public/font/Satoshi-Variable.ttf",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
});

// Importing Cabinet font
const cabinet = localFont({
  src: [
    {
      path: "../../public/font/CabinetGrotesk-Variable.ttf",
      weight: "300",
    },
    {
      path: "../../public/font/CabinetGrotesk-Variable.ttf",
      weight: "400",
    },
    {
      path: "../../public/font/CabinetGrotesk-Variable.ttf",
      weight: "500",
    },
    {
      path: "../../public/font/CabinetGrotesk-Variable.ttf",
      weight: "600",
    },
    {
      path: "../../public/font/CabinetGrotesk-Variable.ttf",
      weight: "700",
    },
  ],
  variable: "--font-cabinet",
});

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <Head>
        <title>Ullsta Gård</title>
        <meta
          name="description"
          content="Ullsta Gård i Gåsinge socken ligger mitt emellan Gnesta och Mariefred i vacker sörmländsk natur. Gården ägs av familjen Lindén sedan 1927 och är idag en viktig del i familjens fritid med perfekt närhet till Stockholm."
        />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/images/Teckning Ullsta.jpg"
          type="image/svg+xml"
        />
      </Head>
      <body
        className={`bg-[#FFFDFA] ${erode.variable} ${satoshi.variable} ${cabinet.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
