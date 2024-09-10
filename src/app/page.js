"use client";

import Layout from "./components/Header/layout";
import Image from "next/image";
import useContentful from "./utils/useContentful";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import React, { useEffect, useState, useCallback } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Card from "./components/Card/page";
import Link from "next/link";

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
        // Sort the posts by date in descending order (latest post first)
        const sortedNewsPosts = newsPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAllNewsPosts(sortedNewsPosts);
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
      <section className="mt-24 lg:mb-10 lg:mt-32 ">
        <div className="mb-10 lg:mb-5 lg:flex lg:justify-center lg:flex-col lg:items-center md:flex md:justify-center md:flex-col ">
          <h1 className="hidden lg:block lg:flex lg:flex-col lg:items-center lg:font-black lg:uppercase lg:leading-none lg:text-blueberry lg:tracking-wide lg:text-[13vw]">
            Ullsta Gård
          </h1>
          <div className="h-full mx-3 md:h-1/5 lg:w-2/5 lg:h-96 lg:overflow-hidden">
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
        <p className="px-3 pb-10 text-[6.5vw] font-cabinet font-regular leading-none tracking-wide md:text-[4vw] md:mx-3 lg:text-[2.5vw] lg:mx-3 lg:leading-normal">
          Ullsta Gård i Gåsinge socken ligger mitt emellan Gnesta och Mariefred
          i vacker sörmländsk natur. Gården ägs av familjen Lindén sedan 1927
          och är idag en viktig del i familjens fritid med perfekt närhet till
          Stockholm.
        </p>
      </section>

      {/* Image section */}
      <section className="mb-10">
        <div className="flex flex-col lg:flex-row">
          <div className="h-full w-full mb-3 overflow-hidden lg:h-[500px] lg:w-[1000px] lg:ml-5">
            <Image
              src="/images/lasmar.jpg"
              width={600}
              height={600}
              alt="Side view of Ullsta"
              className="px-3 w-full h-full object-cover"
            />
          </div>

          {/* <div className="flex justify-end items-end h-full w-full overflow-hidden lg:mt-[-100px]">
            <div className="mx-8 w-2/4 lg:w-2/4 lg:max-w-sm lg:overflow-hidden lg:mr-20">
              <Image
                src="/images/tornrum.jpeg"
                width={600}
                height={600}
                alt="View from Tornrummet"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </section>

      <hr className="hidden border-black mx-5 lg:mb-10 lg:mx-20 lg:block" />
      <section className="lg:flex font-cabinet w-full">
        <h2 className="font-cabinet pb-1 font-black text-[8vw] tracking-[3%] text-blueberry mx-4 text-wrap md:text-[4vw] md:ml-10 lg:text-[3vw] lg:ml-20">
          Senaste händelserna
        </h2>
        <section className="mb-3 grid grid-cols-1 lg:gap-y-6 lg:grid-cols-2 lg:pl-48 lg:px-20 lg:gap-x-12 lg:mb-10 w-full">
          {displayedNewsPosts.map((post, index) => (
            <div key={index} className="md:mt-0 relative w-full">
              {(index === 2 || index === 3) && (
                <hr className="border-black lg:my-2 lg:mx-4 " />
              )}
              <hr className="lg:hidden border-black mx-3 md:mx-10 lg:mb-16 lg:mx-20" />
              <div className="flex justify-between items-center mx-4 mr-10 mt-5 md:mx-10 lg:mx-4 lg:mb-1 lg:flex-row">
                <h4 className="text-[4.5vw] font-cabinet tracking-wide mr-5 md:text-[2.5vw] lg:mx-7 lg:text-[1.3vw] font-bold lg:ml-0 lg:mt-4">
                  {post.title}
                </h4>
                <p className="text-[4.5vw] tracking-wide font-regular md:text-[2vw] lg:text-[1.3vw] lg:mt-4">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <div className="mx-4 mb-3 mt-3 text-[4.2vw] tracking-wide md:mx-10 md:text-[2vw] lg:text-[1.2vw] lg:mx-4">
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

      <section className="flex flex-col mb-10 lg:my-20">
        {/* White background container for the heading */}
        <div className="mx-3 leading-none bg-[#FFFDFA] md:mx-10 lg:h-full lg:items-center lg:justify-center">
          <h2 className="mb-5 text-[10vw] font-cabinet font-black text-blueberry md:text-[9vw] lg:text-[6.5vw] lg:mb-10 lg:whitespace-nowrap">
            Läs mer
          </h2>
        </div>

        {/* Scrollable container for the cards */}
        <div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 lg:mx-3 lg:gap-3">
          <div className="">
            <Link href="/history">
              <Card
                src="/images/landscape.jpeg"
                title="Historia"
                description="Husets historia & Familjen Lindén"
                className=""
              />
            </Link>
          </div>
          <div>
            <Link href="/news">
              <Card
                src="/images/forsnacks.jpeg"
                title="Nyheter"
                description="Uppdatera dig om det senaste"
                className=""
              />
            </Link>
          </div>
          <div>
            <Link href="/guestbook">
              <Card
                src="/images/gularummet.jpeg"
                title="Gästbok"
                description="Läs om minnen & dela dina!"
                className=""
              />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
