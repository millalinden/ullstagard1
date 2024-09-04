"use client";

import Layout from "./components/Header/layout";
import Link from "next/link";
import Image from "next/image";
import useContentful from "./utils/useContentful";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import React, { useEffect, useState, useCallback } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CarouselContainer from "./components/Carousel/page";


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
      <section className="mt-32 lg:mb-16 ">
        <div className="mb-10 lg:flex lg:justify-center lg:flex-col lg:items-center md:flex md:justify-center md:flex-col md:items-center">
          <h1 className="hidden lg:block lg:flex lg:flex-col lg:items-center lg:font-black lg:uppercase lg:leading-none lg:text-blueberry lg:tracking-wide lg:text-[13vw]">
            Ullsta Gård
          </h1>
          <div className="h-full mx-3 lg:w-2/5 lg:h-96 lg:overflow-hidden">
            <Image
              src="/images/frontt.jpeg"
              alt="Front view of Ullsta Gård"
              width={600}
              height={337}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="px-3 pb-14 text-[6.5vw] font-cabinet font-regular leading-none tracking-wide md:text-[2.5vw] md:mx-10 lg:text-[2.5vw] lg:mx-20 lg:leading-normal">
          Ullsta Gård i Gåsinge socken ligger mitt emellan Gnesta och Mariefred
          i vacker sörmländsk natur. Gården ägs av familjen Lindén sedan 1927
          och är idag en viktig del i familjens fritid med perfekt närhet till
          Stockholm.
        </p>
      </section>

      {/* Image section */}
      <section className="mb-16 ">
        <div className="h-40 w-3/4 mb-3 overflow-hidden">
          <Image
            src="/images/lasmar.jpg"
            width={600}
            height={600}
            alt="Side view of Ullsta"
            className="pl-3 w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-end items-end h-full w-full overflow-hidden">
          <div className=" mx-8 w-2/4">
            <Image
              src="/images/tornrum.jpeg"
              width={600}
              height={600}
              alt="View from Tornrummet"

              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <hr className="hidden border-black mx-5 lg:mb-10 lg:mx-20 lg:block" />
      <section className="lg:flex font-cabinet w-full">
        <h2 className="font-cabinet pb-1 font-black text-[7vw] tracking-[3%] text-blueberry mx-5 text-wrap md:text-[3vw] md:ml-14 lg:text-[3vw] lg:ml-20">
          Senaste händelserna
        </h2>
        <section className="mb-3 grid grid-cols-1 lg:gap-y-6 lg:grid-cols-2 lg:pl-48 lg:px-20 lg:gap-x-12 lg:mb-10 w-full">
          {displayedNewsPosts.map((post, index) => (
            <div key={index} className="md:mt-0 relative w-full">
              {(index === 2 || index === 3) && (
                <hr className="border-black lg:my-2 lg:mx-4 " />
              )}
              <hr className="lg:hidden border-black mx-3 md:mx-14 lg:mb-16 lg:mx-20" />
              <div className="flex justify-between items-center mx-4 mr-10 mt-5 md:mx-14 lg:mx-4 lg:mb-1 lg:flex-row">
                <h4 className="text-[4.5vw] font-cabinet tracking-wide mr-5 md:text-[2vw] lg:mx-7 lg:text-[1.3vw] font-bold lg:ml-0 lg:mt-4">
                  {post.title}
                </h4>
                <p className="text-[4.5vw] tracking-wide font-regular md:text-[1.5vw] lg:text-[1.3vw] lg:mt-4">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <div className="mx-4 mb-3 mt-3 text-[4.2vw] tracking-wide md:mx-14 md:text-[1.5vw] lg:text-[1.2vw] lg:mx-4">
                {documentToReactComponents(post.description)}
              </div>
            </div>
          ))}
        </section>
      </section>
      <div className="flex justify-end mr-10 lg:mr-32 lg:mb-4 ">
        <Link href="/news">
          <button className="cursor-pointer ">
            <HiOutlineArrowLongRight size={30} />
          </button>
        </Link>
      </div>
      <hr className="border-black mx-3 mt-2 mb-10 md:mx-10 lg:mb-10 lg:mx-20" />

      <section className="flex flex-col lg:mb-10 lg:flex-row lg:relative">
        {/* White background container for the heading */}
        <div className="mx-2 leading-none bg-[#FFFDFA] lg:w-2/5 lg:py-4 lg:px-8 lg:sticky lg:top-0 lg:h-full lg:items-center lg:justify-center">
          <h2 className="text-[17vw] uppercase font-cabinet font-black text-blueberry md:text-[9vw] lg:text-[6.5vw] lg:whitespace-nowrap">
            Läs mer
          </h2>
        </div>

        {/* Scrollable container for the cards */}
        <div>
          <CarouselContainer />
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
