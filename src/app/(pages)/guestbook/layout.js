import Head from "next/head";

export const metadata = {
  title: "Ullsta Gård - Gästbok",
  description:
    "Läs och dela minnen i vår gästbok! Här kan du läsa vad tidigare gäster har upplevt på Ullsta Gård och skriva ditt eget minne eller intryck från ditt besök.",
};

export default function GuestbookLayout({ children }) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main>{children}</main>
    </div>
  );
}
