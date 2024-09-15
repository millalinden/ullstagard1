import Head from "next/head";

export const metadata = {
  title: "Historien om Ullsta Gård | Familjen Lindén",
  description:
    "Upptäck den fascinerande historien om Ullsta Gård och Familjen Lindén. Läs om gårdens ursprung, dess utveckling genom åren, och familjens roll i dess historia och framtid.",
};

export default function HistoryLayout({ children }) {
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
