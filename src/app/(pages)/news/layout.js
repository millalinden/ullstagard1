import Head from "next/head";

export const metadata = {
  title: "Ullsta Gård | Senaste Nytt",
  description:
    "Håll dig uppdaterad med de senaste nyheterna och händelserna från Ullsta Gård. Läs om vad som nyligen har hänt på gården och viktiga uppdateringar.",
};

export default function NewsLayout({ children }) {
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
