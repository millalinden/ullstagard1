import Header from "./page";
import Head from "next/head";
// import Footer from "../Footer/page";

function Layout({ children }) {
  return (
    <div className="bg-[#FFFDFA]">
      <Head>
        <title>Ullsta Gård</title>
        <meta name="description" content="Generated by create next app" />
        {/* Add any other meta tags or link tags for stylesheets here */}
      </Head>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
