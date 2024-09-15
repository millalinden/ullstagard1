import Layout from "../../components/Header/layout";
import Image from "next/image";
import Accordion from "../../components/Accordion/accordion";

export default function Contact() {
  return (
      <section className="lg:flex lg:w-full lg:h-full">
        <div className="mt-24 lg:mt-32 w-full h-[350px] mb-5 overflow-hidden lg:w-[1500px] lg:h-[600px]">
          <Image
            className="w-full h-full object-cover lg:object-top	px-3"
            src="/images/IMG_0577.jpeg"
            width={3024}
            height={3024}
            alt="View over fields and Nyckelsjön"
          />
        </div>
        <section className="lg:flex-col">
          <section className="mb-16 font-cabinet flex flex-col items-start lg:mt-32 lg:justify-start lg:items-end ">
            <div className="flex items-start justify-center space-x-12 md:space-x-32 mx-4 lg:mx-3 lg:space-x-28 lg:justify-end">
              <div className="flex-shrink-0">
                <h2 className="text-[6vw] leading-tight text-blueberry  md:text-[4vw] lg:text-[1.4vw] ">
                  Hitta Hit
                </h2>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-[6vw] leading-tight text-blueberry md:text-[4vw] lg:text-[1.4vw]">
                  Ullsta Gård ligger vackert beläget mellan två sjöar i
                  Sörmland. Vänligen se nedan för vägbeskrivningar och
                  information om hur du lättast hittar till oss.
                </p>
              </div>
            </div>
          </section>

          <section className="font-cabinet flex flex-col items-start mb-20 lg:justify-center ">
            <div className="flex items-start justify-center space-x-[3.8rem] md:space-x-[9rem] mx-4 lg:space-x-32">
              <div className="flex-shrink-0">
                <h2 className="text-[6vw] leading-tight text-blueberry md:text-[4vw] lg:text-[1.4vw] ">
                  Adress
                </h2>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-[6vw] leading-tight text-blueberry md:text-[4vw] lg:text-[1.4vw]">
                  Gåsinge-Ullsta Stora Huset <br></br>646 91 Gnesta
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section className="hidden lg:block font-cabinet mb-16 lg:justify-center ">
        {/* First section */}
        <div className="grid grid-cols-2 gap-x-12 mx-4 lg:gap-x-1 lg:pr-5">
          <div className="flex-shrink-0">
            <h2 className="text-[6vw] leading-tight text-blueberry lg:text-[1.4vw] lg:font-none lg:w-64">
              Med kollektivtrafik från Stockholm
            </h2>
          </div>
          <div className="lg:w-5/6">
            <p className="text-[6vw] leading-tight text-blueberry lg:text-[1.4vw]">
              Från Stockholm Central ta pendeltåget eller Mälartåget till Gnesta
              via Södertälje Hamn. Det går att ta buss till Ullsta från Gnesta
              med Sörmlandstrafiken. Hållplatsen heter Ullsta Gåsinge-Dillnäs.
            </p>
          </div>
        </div>

        {/* Second section */}
        <div className="grid grid-cols-2 gap-x-12 mx-4 lg:gap-x-1 lg:pr-5 lg:mt-20">
          <div className="flex-shrink-0">
            <h2 className="text-[6vw] leading-tight text-blueberry lg:text-[1.4vw] lg:font-none lg:w-64">
              Med bil från Stockholm
            </h2>
          </div>
          <div className="lg:w-5/6">
            <p className="text-[6vw] leading-tight text-blueberry lg:text-[1.4vw]">
              Kör E20/E4 söderut mot Helsingborg/Göteborg/Södertälje. <br />
              Efter 25-30 minuter i Södertälje, sväng av höger efter
              järnvägsbron mot Göteborg/Strängnäs E20.
              <br /> Efter ca. 20 minuter, sväng av höger vid Läggesta
              trafikplats mot Mariefred/Nyköping väg 223.
              <br /> Sväng höger direkt efter avfarten, och efter 80 meter
              vänster på väg 223 mot Nyköping. <br />
              Följ väg 223 parallellt med motorvägen i 1 km, sväng höger på väg
              223 mot Nyköping och kör under motorvägen. <br />
              Efter ca. 1 mil passerar ni Laxne, håll höger mot Nyköping och
              fortsätt på väg 223.
              <br /> I byn Blacksta, kör rakt fram vid trevägskorsningen mot
              Gnesta och lämna väg 223.
              <br /> Efter ca. 800 meter ser ni ett gult hus med röda byggnader,
              kör upp till det gula huset, ni är framme.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-4 mb-10 lg:hidden">
        <Accordion
          title="Med bil från Stockholm"
          content={
            <>
              Kör E20/E4 söderut mot Helsingborg/Göteborg/Södertälje. <br />
              Efter 25-30 minuter i Södertälje, sväng av höger efter
              järnvägsbron mot Göteborg/Strängnäs E20.
              <br /> Efter ca. 20 minuter, sväng av höger vid Läggesta
              trafikplats mot Mariefred/Nyköping väg 223.
              <br /> Sväng höger direkt efter avfarten, och efter 80 meter
              vänster på väg 223 mot Nyköping. <br />
              Följ väg 223 parallellt med motorvägen i 1 km, sväng höger på väg
              223 mot Nyköping och kör under motorvägen. <br />
              Efter ca. 1 mil passerar ni Laxne, håll höger mot Nyköping och
              fortsätt på väg 223.
              <br /> I byn Blacksta, kör rakt fram vid trevägskorsningen mot
              Gnesta och lämna väg 223.
              <br /> Efter ca. 800 meter ser ni ett gult hus med röda byggnader,
              kör upp till det gula huset, ni är framme.
            </>
          }
        />
      </section>
      <section className="mx-4 mb-20 lg:hidden">
        <Accordion
          title="Med kollektivtrafik från Stockholm"
          content="Från Stockholm Central ta pendeltåget till Gnesta via Södertälje Hamn. Det går att ta buss till Ullsta från Gnesta med Sörmlandstrafiken. Hållplatsen heter Ullsta Gåsinge-Dillnäs."
        />
      </section>
    </Layout>
  );
}
