"use client";
import Layout from "../components/Header/layout";
import Accordion from "../components/Accordion/accordion";
import { useState } from "react";

export default function Contact() {
  return (
    <Layout>
      <section className="">
        <h2 className="playfair text-[30px] tracking-wide mt-32 mx-5 mb-3">
          Hitta Hit
        </h2>
        <p className="px-5 text-[16px] pb-10">
          Ullsta Gård är vackert belägen mellan två sjöar på adressen{" "}
          <i>Gåsinge, 646 91 Gnesta.</i>
        </p>
        <section className="mx-5 mb-5">
          <Accordion
            title="Med bil från Stockholm"
            content="Kör E20/E4 söderut mot Helsingborg/Göteborg/Södertälje. Efter ca. 25-30 minuter framme i Södertälje sväng av höger efter järnvägsbron mot Göteborg/Strängnäs E20. Kör i ca. 20 minuter på motorvägen E20, vid Läggesta trafikplats sväng av motorvägen till höger skylt Mariefred/Nyköping väg 223. Direkt efter avfarten sväng höger och efter 80 meter sväng vänster, på väg 223 mot Nyköping. Ni kör nu parallellt med motorvägen i motsatt riktning i ca. 1 km, därefter sväng höger på vag 223 mot Nyköping, ni kommer nu köra under motorvägen. Följ väg 223 efter ca. 1 mil kör ni igenom ett litet samhälle som heter Laxne, där håller ni höger mot Nyköping och fortsätter på väg 223. Efter ca. 10 minuter kommer ni till en liten by, Blacksta, kör rakt igenom byn och vid trevägskorsningen kör ni rakt fram mot Gnesta, ni lämnar nu väg 223. Efter ca. 800 meter ser ni en granhäck på höger sida med ett stort gult trähus omgivna av röda ekonomi byggnader, kör upp till Gula huset, ni är framme."
          />
        </section>
        <section className="mx-5 mb-5">
          <Accordion
            title="Med kollektivtrafik från Stockholm"
            content="Från Stockholm Central ta pendeltåget till Gnesta via Södertälje Hamn. Det går att ta buss till Ullsta från Gnesta med Sörmlandstrafiken. Hållplatsen heter Ullsta Gåsinge-Dillnäs."
          />
        </section>
      </section>
    </Layout>
  );
}
