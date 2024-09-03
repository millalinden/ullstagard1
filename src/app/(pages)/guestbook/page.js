"use client";
import React, { useState } from "react";
import Form from "../../components/Form/page";
import Button from "../../components/Button/page";
import Layout from "../../components/Header/layout";

export default function GuestBook() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Layout>
      {/* Main container to hold the guestbook and form */}
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Guestbook Content */}
        <section
          className={`absolute bottom-0 left-0 right-0 transform .transitionT duration-500 ease-in-out ${
            isFormVisible ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <section className="">
            <p className="font-erode text-blueberry w-2/5">
              Välkommen till vår digitala gästbok! Här kan du dela dina tankar,
              minnen och hälsningar med oss. Vi uppskattar verkligen att du tar
              dig tid att skriva några ord, och vi ser fram emot att läsa dina
              meddelanden.
            </p>
          </section>
          <div className="lg:flex lg:justify-between lg:items-end">
            <h2 className="font-satoshi font-black text-blueberry text-[9vw] lg:text-[10vw] lg:mx-5 lg:mb-5 leading-none ">
              Gästbok
            </h2>
            <Button
              onClick={toggleFormVisibility}
              className="text-blueberry text-[4vw] md:text-[3vw] lg:text-[1vw] border lg:mb-8 lg:px-6 lg:py-2 lg:mx-12"
            >
              Skriv en mening
            </Button>
          </div>
        </section>

        {/* Form - Initially off-screen */}
        <div
          className={`absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${
            isFormVisible ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <Form closeForm={toggleFormVisibility} />
        </div>
      </div>
    </Layout>
  );
}
