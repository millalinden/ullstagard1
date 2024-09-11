import Head from 'next/head';


export const metadata = {
  title: "Ullsta Gård | Hitta hit",
  description:
    "Ullsta Gård ligger vackert beläget mellan två sjöar i Sörmland. Här hittar du vägbeskrivningar och information om hur du lättast hittar till oss, både med kollektivtrafik och bil.",
};

export default function ContactLayout({ children }) {
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
