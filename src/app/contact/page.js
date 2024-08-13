"use client";
import Layout from "../components/Header/layout";
import Accordion from "../components/Accordion/accordion";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout>
      <section className="">
        <div className="lg:flex lg:justify-center">
          <h2 className="font-satoshi font-[900] text-blueberry uppercase text-[10vw] lg:text-[10vw] tracking-wide mt-28 mx-5 mb-5 lg:mb-64 lg:z-10">
            Hitta Hit
          </h2>
        </div>
        <Image src="/images/map.svg" width={500} height={500} className="hidden lg:z-0 lg:absolute lg:bottom-[30%] lg:left-[35%] lg:block"/>
        <div className=" mx-5 lg:flex lg:justify-around">
          <p className="mb-10 font-erode lg:text-[1.4vw] tracking-wide">
            Gåsinge-Ullsta Stora Huset 1<br></br> 646 91 Gnesta<br></br> Sweden
          </p>
          <p className="hidden mb-5 font-erode lg:text-[1.4vw] tracking-wide lg:block">
            Med kollektivtrafik från Stockholm
          </p>
          <p className="hidden font-erode lg:text-[1.4vw] tracking-wide lg:block">Med bil från Stockholm</p>
        </div>
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
      </section>
    </Layout>
  );
}
