import Head from "next/head";

export const metadata = {
  title: "Ullsta Gård | Bildgalleri",
  description:
    "Utforska vårt bildgalleri och upptäck vackra bilder från Ullsta Gård från de olika säsongerna. Här kan du se bilder på gården, omgivningarna och olika evenemang som har hållits här.",
};

export default function ImageGalleryLayout({ children }) {
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
