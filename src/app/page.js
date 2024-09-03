"use client";

import Layout from "./components/Header/layout";
import Link from "next/link";
import Image from "next/image";
import useContentful from "./utils/useContentful";
import Card from "./components/Card/page";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// import Marquee from "./components/Marquee/page";
import React, { useEffect, useState, useCallback } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function HomePage() {
  const { getNewsPosts } = useContentful();
  const [allNewsPosts, setAllNewsPosts] = useState([]);
  const [displayedNewsPosts, setDisplayedNewsPosts] = useState([]);

  const updateDisplayedNewsPosts = useCallback(() => {
    const isDesktop = window.innerWidth >= 1024; // Define your breakpoint for desktop
    if (isDesktop) {
      setDisplayedNewsPosts(allNewsPosts.slice(0, 4));
    } else {
      setDisplayedNewsPosts(allNewsPosts.slice(0, 2));
    }
  }, [allNewsPosts]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const newsPostsData = await getNewsPosts();
        setAllNewsPosts(newsPostsData);
        updateDisplayedNewsPosts();
      } catch (error) {
        console.error("Error fetching newsPosts:", error);
      }
    };

    fetchNewsPosts();
    window.addEventListener("resize", updateDisplayedNewsPosts);

    return () => {
      window.removeEventListener("resize", updateDisplayedNewsPosts);
    };
  }, [getNewsPosts, updateDisplayedNewsPosts]);

  return (
    <Layout>
      <section className="lg:mb-16 ">
        <div className="lg:flex lg:justify-center lg:flex-col lg:items-center md:flex md:justify-center md:flex-col md:items-center">
          <h1 className=" flex flex-col items-center mt-32 pb-2 text-[13vw] font-[900] uppercase text-blueberry tracking-wide lg:text-[13vw]">
            Ullsta Gård
          </h1>
          <Image
            src="/images/front.png"
            alt="Front view of Ullsta Gård"
            width={600}
            height={337}
            priority
            className="px-6 mb-5 md:mt-[-80px] lg:mt-[-120px] lg:mb-10"
          />
        </div>
        <p className="px-6 pb-5 text-[5vw] font-erode font-regular md:text-[2.5vw] md:mx-10 lg:text-[2.5vw] lg:mx-20 lg:leading-normal">
          Ullsta Gård i Gåsinge socken ligger mitt emellan Gnesta och Mariefred
          i vacker sörmländsk natur. Gården ägs av familjen Lindén sedan 1927
          och är idag en viktig del i familjens fritid med perfekt närhet till
          Stockholm.
        </p>
      </section>
      {/* <Marquee /> */}
      <hr className="hidden border-black mx-5 lg:mb-10 lg:mx-20 lg:block" />
      <section className="lg:flex font-erode w-full">
        <h2 className="font-satoshi pb-1 font-[700] text-[7vw] tracking-[3%] text-blueberry mx-7 text-wrap md:text-[3vw] md:ml-14 lg:text-[3vw] lg:ml-20">
          Senaste händelserna
        </h2>
        <section className="mb-5 grid grid-cols-1 lg:gap-y-6 lg:grid-cols-2 lg:pl-48 lg:px-20 lg:gap-x-12 lg:mb-10 w-full">
          {displayedNewsPosts.map((post, index) => (
            <div key={index} className="md:mt-0 relative w-full">
              {(index === 2 || index === 3) && (
                <hr className="border-black lg:my-2 lg:mx-4 " />
              )}
              <hr className="lg:hidden border-black mx-7 md:mx-14 lg:mb-16 lg:mx-20" />
              <div className="flex mx-7 mt-5 md:mx-14 lg:flex-row lg:mb-1 lg:mx-4">
                <h4 className="text-[4.5vw] tracking-wide mr-5 md:text-[2vw] lg:mx-7 lg:text-[1.3vw] font-regular lg:ml-0 lg:mt-4">
                  {post.title}
                </h4>
                <p className="text-[4.5vw] tracking-wide font-regular md:text-[1.5vw] lg:text-[1.3vw] lg:mt-4 lg:ml-4">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <div className="mx-7 mb-5 mt-2 text-[4vw] tracking-wide md:mx-14 md:text-[1.5vw] lg:text-[1.2vw] lg:mx-4">
                {documentToReactComponents(post.description)}
              </div>
            </div>
          ))}
        </section>
      </section>
      <div className="flex justify-end mr-10 lg:mr-32 lg:mb-4 ">
        <Link href="/news">
          <button className="cursor-pointer">
            <HiOutlineArrowLongRight size={30} />
          </button>
        </Link>
      </div>
      <hr className="border-black mx-7 my-5 md:mx-10 lg:mb-10 lg:mx-20" />

      <section className="flex flex-col lg:mb-10 lg:flex-row lg:relative">
        {/* White background container for the heading */}
        <div className="bg-[#FFFDFA] lg:w-2/5 lg:py-4 lg:px-8 lg:sticky lg:top-0 lg:h-full lg:items-center lg:justify-center">
          <h2 className="text-[15vw] ml-10 uppercase font-[900] text-blueberry md:text-[9vw] lg:text-[6.5vw] lg:whitespace-nowrap">
            Läs mer
          </h2>
        </div>

        {/* Scrollable container for the cards */}
        <div className="flex-1 lg:overflow-x-auto lg:overflow-y-hidden lg:whitespace-nowrap lg:mt-10 lg:scrollbar">
          <div className="lg:inline-block lg:flex lg:space-x-10">
            <Card
              src="/images/lasmar.jpg"
              title="Ullsta Gårds Historia"
              description="Ullsta Gårds historia och den långa traditionen av Familjen Lindén som har bott i huset genom generationer."
              className="lg:w-[500px]"
            />
            <Card
              src="/images/snacks.jpeg"
              title="Vad har hänt sedan sist?"
              description="Håll dig uppdaterad om de senaste projekten, besöken och nyheterna."
              className="lg:w-[500px]"
            />
            <Card
              src="/images/gul.jpeg"
              title=""
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="lg:w-[500px]"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
