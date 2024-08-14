"use client";

import Layout from "./components/Header/layout";
import Link from "next/link";
import Image from "next/image";
import useContentful from "./utils/useContentful";
import Card from "./components/Card/page";
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
      <section className="lg:mb-28 ">
        <div className="lg:flex lg:justify-center lg:flex-col lg:items-center">
          <h1 className=" flex flex-col items-center mt-32 pb-6 text-[13vw] font-[900] uppercase text-blueberry tracking-wide lg:text-[14vw]">
            Ullsta Gård
          </h1>
          <Image
            src="/images/front.png"
            alt="Front view of Ullsta Gård"
            width={600}
            height={337}
            priority
            className="px-6 mb-5 lg:mt-[-90px] lg:mb-10"
          />
        </div>
        <p className="px-5 pb-10 font-erode font-regular lg:text-[2.5vw] lg:mx-20 lg:leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
      </section>
      {/* <Marquee /> */}
      <hr className="hidden border-black mx-5 lg:mb-16 lg:mx-20 lg:block" />
      <section className="lg:flex font-erode w-full">
        <h2 className="font-satoshi pb-1 font-[700] text-[7vw] tracking-[3%] text-blueberry mx-7 text-wrap lg:text-[2.5vw] lg:ml-28">
          Senaste händelserna
        </h2>
        <section className="mb-10 grid grid-cols-1 lg:gap-y-6 lg:grid-cols-2 lg:pl-48 lg:px-20 lg:gap-x-12 lg:mb-28 w-full">
          {displayedNewsPosts.map((post, index) => (
            <div key={index} className="md:mt-0 relative w-full">
              {(index === 2 || index === 3) && (
                <hr className="border-black lg:my-2 lg:mx-4" />
              )}
              <hr className="lg:hidden border-black mx-7 lg:mb-16 lg:mx-20" />

              <div className="flex mx-7 mt-5 lg:flex-row lg:mb-1 lg:mx-4">
                <h4 className="text-[4vw] tracking-wide mr-5 lg:mx-7 lg:text-[1.3vw] font-medium lg:ml-0 lg:mt-4">
                  {post.title}
                </h4>
                <p className="text-[4vw] tracking-wide font-medium lg:text-[1.3vw] lg:mt-4 lg:ml-4">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <p className="mx-7  mb-5  text-[4vw] tracking-wide lg:text-[1.2vw] lg:mx-4">
                {documentToReactComponents(post.description)}
              </p>
            </div>
          ))}
        </section>

        <div className="flex justify-end lg:mr-5 lg:mb-4 absolute right-[30px] top-[830px] lg:right-[120px] lg:bottom-[-720px]">
          <Link href="/news">
            <button className="cursor-pointer">
              <svg
                width="29"
                height="8"
                viewBox="0 0 29 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5L28 4.5V3.5L0 3.5L0 4.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </Link>
        </div>
      </section>
      <hr className="hidden border-black mx-7 lg:mb-14 lg:mx-20 lg:block" />

      <section className="flex flex-col lg:mb-10 lg:flex-row lg:relative">
        {/* White background container for the heading */}
        <div className="bg-[#FFFDFA] lg:w-2/5 lg:py-4 lg:px-8 lg:sticky lg:top-0 lg:h-full lg:items-center lg:justify-center">
          <h2 className="text-[15vw] ml-10 uppercase font-[900] text-blueberry lg:text-[6.5vw] lg:whitespace-nowrap">
            Läs mer
          </h2>
        </div>

        {/* Scrollable container for the cards */}
        <div className="flex-1 lg:overflow-x-auto lg:overflow-y-hidden lg:whitespace-nowrap lg:mt-10 lg:scrollbar">
          <div className="lg:inline-block lg:flex lg:space-x-10">
            <Card
              src="/images/lasmar.jpg"
              description="Ullsta Gårds historia och den långa traditionen av Familjen Lindén som har bott i huset genom generationer."
              className="lg:w-[500px]"
            />
            <Card
              src="/images/snacks.jpeg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="lg:w-[500px]"
            />
            <Card
              src="/images/gul.jpeg"
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
