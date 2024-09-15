import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import Head from "next/head";

const satoshi = localFont({
  src: [
    { path: "../../public/font/Satoshi-Variable.ttf", weight: "300" },
    { path: "../../public/font/Satoshi-Variable.ttf", weight: "400" },
    { path: "../../public/font/Satoshi-Variable.ttf", weight: "500" },
    { path: "../../public/font/Satoshi-Variable.ttf", weight: "600" },
    { path: "../../public/font/Satoshi-Variable.ttf", weight: "700" },
  ],
  variable: "--font-satoshi",
});

const cabinet = localFont({
  src: [
    { path: "../../public/font/CabinetGrotesk-Variable.ttf", weight: "300" },
    { path: "../../public/font/CabinetGrotesk-Variable.ttf", weight: "400" },
    { path: "../../public/font/CabinetGrotesk-Variable.ttf", weight: "500" },
    { path: "../../public/font/CabinetGrotesk-Variable.ttf", weight: "600" },
    { path: "../../public/font/CabinetGrotesk-Variable.ttf", weight: "700" },
  ],
  variable: "--font-cabinet",
});

export const metadata = {
  title: "Ullsta Gård",
  description:
    "Ullsta Gård i Gåsinge socken ligger mitt emellan Gnesta och Mariefred i vacker sörmländsk natur. Gården ägs av familjen Lindén sedan 1927 och är idag en viktig del i familjens fritid med perfekt närhet till Stockholm.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`bg-[#FFFDFA] ${satoshi.variable} ${cabinet.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
