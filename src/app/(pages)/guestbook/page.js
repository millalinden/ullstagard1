"use client";
import React, { useState } from "react";
import Form from "../../components/Form/page";
import Button from "../../components/Button/page";
import Layout from "../../components/Header/layout";
import Image from "next/image";
import Comment from "@/app/components/Comment/page";

export default function GuestBook() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Layout>
      {/* Main container to hold the guestbook and form */}
      <div className="relative w-screen overflow-hidden">
        {/* Guestbook Content */}
        <section
          className={` lg:absolute lg:bottom-0 lg:left-0 lg:right-0 transform .transitionT duration-500 ease-in-out ${
            isFormVisible ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="mt-24 mb-5 flex justify-start items-center mx-3">
            <h2 className=" text-left font-satoshi font-medium tracking-wide uppercase text-blueberry/70 text-lg mb-5 lg:text-[10vw] lg:mx-5 lg:mb-5 leading-none ">
              Ullsta Gård Gästbok
            </h2>
          </div>
          <div className="relative">
            <section className="relative z-10">
              <p className="font-cabinet font-regular z-20 leading-[3rem] text-[15vw] text-blueberry mx-3 ">
                Dela dina <i>minnen och hälsningar</i> digitalt.
              </p>
            </section>

            <div className="relative -mt-6">
              
              {/* Adjusted the margin to move the image higher */}
              <div className="absolute top-10 left-0 z-10">
                <Button
                  onClick={toggleFormVisibility}
                  className=" mx-3 mt-1 border font-medium font-cabinet text-[3.5vw] md:text-[3vw] lg:text-[1vw] border lg:px-6 lg:py-2 lg:mx-12"
                >
                  Skriv en mening
                </Button>
              </div>
              <Image
                src="/images/falt.jpeg"
                width={3024}
                height={3024}
                alt="Green field and lightblue sky"
                className="object-bottom pb-10"
              />
            </div>
          </div>
        </section>
        <section className="h-full mb-20">
          <h3 className="font-cabinet text-[7vw] text-blueberry mx-3 mb-8">Delade stunder & hälsningar</h3>
          <div className="">
            <Comment/>
          </div>
        </section>

        {/* Form - Initially off-screen */}
        <div
          className={`absolute bottom-0 left-0 top-16 right-0 transform transition-transform duration-500 ease-in-out ${
            isFormVisible ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <Form closeForm={toggleFormVisibility} />
        </div>
      </div>
    </Layout>
  );
}
