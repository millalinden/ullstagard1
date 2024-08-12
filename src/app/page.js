"use client";
import Layout from "./components/Header/layout";
import Image from "next/image";
import useContentful from "./utils/useContentful";
import Card from "./components/Card/page";
import React, { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function HomePage() {
  const { getNewsPosts } = useContentful();
  const [allNewsPosts, setAllNewsPosts] = useState([]);
  const [displayedNewsPosts, setDisplayedNewsPosts] = useState([]);

  const updateDisplayedNewsPosts = () => {
    const isDesktop = window.innerWidth >= 1024; // Define your breakpoint for desktop
    if (isDesktop) {
      setDisplayedNewsPosts(allNewsPosts.slice(0, 4));
    } else {
      setDisplayedNewsPosts(allNewsPosts.slice(0, 2));
    }
  };

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
  }, [getNewsPosts]);

  return (
    <Layout>
      <section className="lg:mb-28">
        <div className="lg:flex lg:justify-center lg:flex-col lg:items-center">
          <h1 className="font-[900] uppercase text-blueberry tracking-wide lg:text-[200px] lg:mt-32">
            Ullsta Gård
          </h1>
          <Image
            src="/images/front.png"
            width={600}
            height={337}
            priority
            className="lg:mt-[-90px] lg:mb-10"
          />
        </div>
        <p className="font-erode font-regular lg:text-[45px] lg:mx-20 lg:leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </section>

      <hr className="border-black mb-16 mx-20" />
      <section className="lg:flex font-erode">
        <h2 className="font-satoshi font-[700] text-[14px] tracking-[3%] mx-7 lg:text-[32px] text-wrap lg:ml-28 text-blueberry">
          Senaste händelserna
        </h2>
        <section className="mb-7 grid grid-cols-1 lg:gap-y-12 lg:grid-cols-2 lg:pl-48 lg:px-20 lg:gap-x-12 lg:mb-20">
          {displayedNewsPosts.map((post, index) => (
            <div key={index} className="mt-4 md:mt-0 relative">
              <hr className="border-black my-3 mx-7 lg:hidden" />
              <div className="flex mb-1 lg:mx-4">
                <h4 className=" text-[13px] tracking-wide mx-7 lg:text-[20px] lg:ml-0 lg:mt-2">
                  {post.title}
                </h4>
                <p className="text-[13px] tracking-wide lg:text-[20px] lg:mt-2">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <p className="mx-7 text-[12px] tracking-wide lg:text-[19px] lg:mx-4">
                {documentToReactComponents(post.description)}
              </p>
            </div>
          ))}
        </section>

        <div className="flex justify-end mr-8 mb-8 lg:absolute lg:right-[120px] lg:bottom-[-820px]">
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
        </div>
      </section>
      <hr className="border-black mb-16 mx-20" />

      <section className="flex lg:mb-10">
        <h2 className="uppercase font-[900] text-blueberry lg:text-[96px] lg:mx-20 lg:mr-20 lg:whitespace-nowrap absolute">
          Läs mer
        </h2>
        <div className="lg:overflow-x-auto lg:overflow-y-hidden lg:whitespace-nowrap lg:mt-10 lg:scrollbar lg:w-full">
          <div className="lg:inline-block lg:flex lg:space-x-10">
            <Card
              src="/images/snacks.jpeg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="w-[500px]"
            />
            <Card
              src="/images/snacks.jpeg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="w-[500px]"
            />
            <Card
              src="/images/snacks.jpeg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="w-[500px]"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
