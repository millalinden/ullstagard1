"use client";
import Image from "next/image";

export default function HistoryComponent() {
  return (
    <section className="w-full h-auto px-4 pb-6">
      <div className="max-w-screen-lg mx-auto">
        <p className="text-lg md:text-xl lg:text-[2vw] lg:leading-[2.3rem] font-medium font-cabinet text-blueberry pb-8">
          Ullsta gård, med anor från 1800-talet, har haft flera ägare genom
          åren, från svenska emigranter till kreaturshandlare under tidigt
          1900-tal. Historien om gården har främst förts vidare genom hörsägen.
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1 mb-6 lg:mb-0">
            <p className="text-base md:text-lg mb-5 lg:text-[1.1vw] font-regular font-cabinet text-blueberry lg:mb-12">
              Ullsta gård omfattar flera fastigheter: Ullsta 1:2, även kallad
              Södra; Ullsta 1:3, känd som Tornrummet; Ullsta 1:4, som benämns
              Lennmarksdelen; Ullsta 2:2, som inkluderar Mellangården, Norra
              stugan och magasinet; samt Ullsta 3:1, som var Holmens soldattorp.
            </p>
            <p className="text-base md:text-lg lg:text-[1.1vw] font-regular font-cabinet text-blueberry ">
              När de olika delarna av gården sammanfördes är inte exakt känt.
              Det har dock berättats att Ville Widéns far, en svensk emigrant
              till Amerika, kom från Ullsta 1:2, och att hans mor troligen hade
              sina rötter i Ullsta 1:3. Under 1880-talet köptes Ullsta 2:2, och
              vid den tiden byggdes "Norra magasinet".
            </p>
          </div>
          <div className="flex-1 mb-6 lg:mb-0">
            <p className="text-base md:text-lg lg:text-[1.1vw] font-regular font-cabinet text-blueberry mb-5">
              År 1905 arrenderades lantbruket av familjen Rehnström, farfar till
              Curt på Davidstad. Under denna tid påbörjades bygget av nya
              byggnader på gården. Ville Widén drev gården själv under några år,
              men bygget stannade av när pengarna tog slut. En ny arrendator
              tillträdde omkring 1910-1911.
            </p>
            <p className="text-base md:text-lg lg:text-[1.1vw] font-regular font-cabinet text-blueberry">
              År 1916 köptes gården av kreaturshandlarna Persson och Larsson,
              som var svågrar gifta med systrar till fröhandlaren Bertil
              Gustafsson. Persson och Larsson använde Ullsta som sitt sommarnöje
              och tjänade bra under krigsåren. År 1919, eller möjligen redan
              1916 invigdes det nybyggda huset med en stor fest, där flaggor
              hissades och påfåglar visades. Larssonfamiljen bodde på andra
              våningen, medan Perssonfamiljen bodde på första våningen.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-blueberry my-10 mx-auto max-w-screen-lg" />
    </section>
  );
}
