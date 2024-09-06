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
          className={`lg:mt-32  transform .transitionT duration-500 ease-in-out ${
            isFormVisible ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="mt-24 mb-5 flex justify-start items-center lg:items-start mx-3 lg:mt-32">
            <h2 className=" text-left font-satoshi font-medium tracking-wide uppercase text-blueberry/70 text-lg mb-5 lg:text-[1vw] lg:mx-3 lg:mb-5 leading-none ">
              Ullsta Gård Gästbok
            </h2>
          </div>
          <div className="relative lg:flex lg:flex-row lg:justify-between lg:items-start">
            <div className="lg:flex-col lg:items-start lg:w-[50%] lg:pr-10 lg:mt-20 ">
              <section className="relative z-10 lg:z-0 lg:static">
                <p className="font-cabinet font-regular z-20 leading-[3rem] text-[15vw] text-blueberry mx-3 lg:text-[7vw] lg:mb-10 lg:px-16 lg:leading-[6rem]">
                  Dela dina <i>minnen och hälsningar</i> digitalt.
                </p>
              </section>

              <div className="relative -mt-6 lg:static">
                {/* Adjusted the margin to move the image higher */}
                <div className="absolute top-10 left-0 z-10 lg:z-0 lg:static lg:top-0 lg:left-0 lg:flex lg:justify-end">
                  <Button
                    onClick={toggleFormVisibility}
                    className=" mx-3 mt-1 border font-medium font-cabinet text-[3.5vw] md:text-[3vw] lg:text-[1.2vw] border lg:px-8 lg:py-4"
                  >
                    Skriv en mening
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:overflow-hidden lg:h-[700px] lg:w-[600px] lg:mr-3">
              <Image
                src="/images/falt.jpeg"
                width={3024}
                height={3024}
                alt="Green field and lightblue sky"
                className="object-bottom pb-10 lg:w-full lg:h-full lg:object-cover lg:object-center"
              />
            </div>
          </div>
        </section>
        <section className="h-full mb-20">
          <h3 className="font-cabinet text-[7vw] text-blueberry mx-3 mb-8 lg:text-[4vw] lg:mx-5">
            Delade stunder & hälsningar
          </h3>
          <div className="lg:mx-5">
            <Comment />
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
