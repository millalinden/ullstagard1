"use client";
import React, { useState } from "react";
import Form from "../../components/Form/page";
import Button from "../../components/Button/page";
import Layout from "../../components/Header/layout";
import Image from "next/image";
import Comment from "@/app/components/Comment/page";
import ImageSquareComponent from "@/app/components/ImageSquareComponent/page";

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
          className={`lg:mt-10 transform .transitionT duration-500 ease-in-out ${
            isFormVisible ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="relative lg:flex lg:flex-row lg:justify-between lg:items-start">
            <div className="lg:flex-col lg:items-start lg:pr-10 ">
              <section className="relative z-10 lg:z-0 lg:static lg:mb-20">
                <div className="mt-24 mb-5 flex justify-start items-center mx-3">
                  <h2 className=" text-left font-satoshi font-medium tracking-wide uppercase text-blueberry/70 text-lg mb-5 lg:text-[1vw] lg:mx-3 leading-none ">
                    Ullsta Gård Gästbok
                  </h2>
                </div>
                <p className="font-cabinet font-regular z-20 leading-[3rem] text-[15vw] text-blueberry mx-3 lg:text-[4vw] lg:w-[80%] lg:mb-10 lg:px-3 lg:leading-none">
                  Dela dina <i>minnen och hälsningar</i> digitalt.
                </p>
              </section>

              <div className="relative -mt-6 lg:static lg:mb-10">
                {/* Adjusted the margin to move the image higher */}
                <div className="absolute top-10 left-0 z-10 lg:z-0 lg:static lg:top-0 lg:left-0 ">
                  <Button
                    onClick={toggleFormVisibility}
                    className=" mx-3 mt-1 border font-medium font-cabinet text-[3.5vw] md:text-[3vw] lg:text-[1.2vw] border lg:px-8 lg:py-4"
                  >
                    Skriv en mening
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:hidden lg:overflow-hidden lg:h-[700px] lg:w-[600px] lg:mr-3">
              <Image
                src="/images/falt.jpeg"
                width={3024}
                height={3024}
                alt="Green field and lightblue sky"
                className="object-bottom  lg:w-full lg:h-full lg:object-cover lg:object-center"
              />
            </div>

            {/* IMAGE SQUARE COMPONENT - DESKTOP */}
          </div>
          <div className="hidden lg:flex lg:min-h-screen lg:w-full lg:items-center lg:justify-center lg:px-3 lg:mb-10">
          <ImageSquareComponent />
        </div>
        </section>
        

        <section className=" h-full mb-20">
          <h3 className="font-cabinet text-[7vw] text-blueberry mx-3 mb-8 lg:text-[4vw] lg:mx-5 lg:mb-20">
            Delade stunder & hälsningar
          </h3>
          <div className="lg:mx-5 lg:grid lg:grid-cols-2 lg:gap-8 lg:justify-items-center">
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
