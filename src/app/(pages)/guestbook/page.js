"use client";
import React, { useState, useRef, useEffect } from "react";
import Form from "../../components/Form/page";
import Button from "../../components/Button/page";
import Image from "next/image";
import Comment from "@/app/components/Comment/page";
import ImageSquareComponent from "@/app/components/ImageSquareComponent/page";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GuestBook() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const titleRef = useRef();

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };


  useEffect(() => {
    if (isFormVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup to ensure overflow is reset when component unmounts or form closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormVisible]);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: "power2.out",
      stagger: 3,
    });
  }, []);

  return (
    <>
      {/* Main container to hold the guestbook and form */}
      <div className="relative w-screen overflow-hidden">
        {/* Guestbook Content */}
        <section
          className={`lg:mt-10 transform .transitionT duration-500 ease-in-out ${
            isFormVisible ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="relative ">
            <div ref={titleRef} className="lg:flex-col  lg:flex  lg:items-center lg:justify-center ">
              <section className="relative z-10 lg:z-0 lg:w-screen   lg:flex lg:flex-col lg:items-center lg:justify-start">
                <div
                  
                  className="mt-24 mb-5 flex justify-start items-center mx-3 "
                >
                  <h2 className=" text-left font-satoshi font-medium tracking-wide uppercase text-blueberry/70 text-lg mb-5 lg:text-[1vw] lg:mx-3 leading-none lg:pt-20">
                    Ullsta Gård Gästbok
                  </h2>
                </div>
                <p
                  
                  className="font-cabinet font-regular z-20 leading-[3rem] text-[15vw] text-blueberry mx-3 md:text-[15vw] md:leading-[6rem] lg:text-[7vw] lg:w-2/3 lg:text-center lg:mb-10 lg:px-3 lg:leading-none"
                >
                  Dela dina <i>minnen och hälsningar</i> digitalt.
                </p>
                <div className="relative -mt-6 lg:static lg:mb-20">
                  {/* Adjusted the margin to move the image higher */}
                  <div className="absolute top-10 left-0 z-10 lg:z-0 lg:static lg:top-0 lg:left-0 lg:pt-10">
                    <Button
                      onClick={toggleFormVisibility}
                      className=" mx-3 mt-1 border font-medium font-cabinet text-[4vw] md:text-[3vw] lg:text-[1.2vw] border lg:px-8 lg:py-4 lg:hover:bg-black lg:hover:text-offwhite"
                    >
                      Skriv en mening
                    </Button>
                  </div>
                </div>
              </section>
            </div>
            <div className="lg:hidden lg:mt-[-200px] md:mt-[-50px]">
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
          <h3 className="font-cabinet font-medium text-[7vw] text-blueberry mx-3 my-8 lg:flex lg:justify-center lg:text-[5vw] lg:mx-3 lg:mb-10">
            Delade stunder & hälsningar
          </h3>
          <div className="lg:mx-3 lg:flex lg:flex-row lg:gap-8 lg:justify-items-center lg;flex-wrap">
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
    </>
  );
}
