import Layout from "../../components/Header/layout";
import Image from "next/image";
import Accordion from "../../components/Accordion/accordion";

export default function Contact() {
  return (
    <Layout>
      <section className="flex flex-col items-start justify-center w-screen h-screen">
        <div className="flex items-start justify-center lg:space-x-52 ml-32">
          <div className="flex-shrink-0">
            <h2 className="lg:uppercase lg:text-blueberry lg:font-regular lg:tracking-widest lg:text-[1.5vw] pt-2">
              Hitta Hit
            </h2>
          </div>
          <div className="ml-4 flex-1">
            <p className="lg:font-erode lg:font-thin lg:text-[3vw] lg:text-blueberry lg:leading-none lg:w-5/6">
              Ullsta Gård ligger vackert beläget mellan två sjöar i Sörmland.
              Vänligen se nedan för vägbeskrivningar och information om hur du
              lättast hittar till oss.
            </p>
          </div>
        </div>
      </section>

      <div className="ml-10 w-2/4 h-96 overflow-hidden">
        <Image
          className="w-full h-full object-cover object-bottom"
          src="/images/IMG_0577.jpeg"
          width={3024}
          height={3024}
        />
      </div>

      <section className="flex items-center justify-center w-screen h-screen ">
        <div className="flex items-start justify-center lg:space-x-52 ml-32">
          <div className="flex-shrink-0">
            <h2 className="lg:uppercase lg:text-blueberry lg:font-regular lg:tracking-widest lg:text-[1.5vw] pt-2">
              Adress{" "}
            </h2>
          </div>
          <div className="ml-4 flex-1">
            <p className="lg:font-erode lg:font-thin lg:text-[3vw] lg:text-blueberry lg:leading-none lg:w-5/6">
              Gåsinge-Ullsta Stora Huset 646 91 Gnesta Sweden
            </p>
          </div>
        </div>
      </section>

      <section className="font-erode mx-5 mb-5 lg:hidden">
        <Accordion
          title="Med bil från Stockholm"
          content="Kör E20/E4 söderut mot Helsingborg/Göteborg/Södertälje. Efter ca. 25-30 minuter framme i Södertälje sväng av höger efter järnvägsbron mot Göteborg/Strängnäs E20. Kör i ca. 20 minuter på motorvägen E20, vid Läggesta trafikplats sväng av motorvägen till höger skylt Mariefred/Nyköping väg 223. Direkt efter avfarten sväng höger och efter 80 meter sväng vänster, på väg 223 mot Nyköping. Ni kör nu parallellt med motorvägen i motsatt riktning i ca. 1 km, därefter sväng höger på vag 223 mot Nyköping, ni kommer nu köra under motorvägen. Följ väg 223 efter ca. 1 mil kör ni igenom ett litet samhälle som heter Laxne, där håller ni höger mot Nyköping och fortsätter på väg 223. Efter ca. 10 minuter kommer ni till en liten by, Blacksta, kör rakt igenom byn och vid trevägskorsningen kör ni rakt fram mot Gnesta, ni lämnar nu väg 223. Efter ca. 800 meter ser ni en granhäck på höger sida med ett stort gult trähus omgivna av röda ekonomi byggnader, kör upp till Gula huset, ni är framme."
        />
      </section>
      <section className="font-erode mx-5 mb-5 lg:hidden">
        <Accordion
          title="Med kollektivtrafik från Stockholm"
          content="Från Stockholm Central ta pendeltåget till Gnesta via Södertälje Hamn. Det går att ta buss till Ullsta från Gnesta med Sörmlandstrafiken. Hållplatsen heter Ullsta Gåsinge-Dillnäs."
        />
      </section>
    </Layout>
  );
}
