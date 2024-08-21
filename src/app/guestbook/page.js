"use client";
import { useState } from "react";
import Form from "../components/Form/page";
import Button from "../components/Button/page";
import Layout from "../components/Header/layout";

export default function GuestBook() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Layout>
            <section>
        <div className="my-36">
          <h2 className="uppercase font-satoshi font-[900] lg:text-[7vw] text-blueberry text-center break-all">
            Gästbok
          </h2>
        </div>
      </section>
      <section>
        <Button
          onClick={toggleFormVisibility}
          className="border-black border px-4 py-2"
        >
          Skriv en mening
        </Button>
        <div
          className={`fixed bottom-0 left-0 w-full transition-transform transform ${
            isFormVisible ? "animate-slideUp" : "translate-y-full"
          }`}
        >
          <Form />
        </div>
      </section>
    </Layout>
  );
}
