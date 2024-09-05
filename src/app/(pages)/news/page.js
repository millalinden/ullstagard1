"use client";
import Layout from "../../components/Header/layout";
import useContentful from "../../utils/useContentful";
import React, { useEffect, useState } from "react";
import FilterButton from "@/app/components/FilterBtn/page";
import NewsComponent from "@/app/components/NewsComponent/page";

export default function News() {
  const { getNewsPosts } = useContentful();
  const [allNewsPosts, setAllNewsPosts] = useState([]);
  const [filteredNewsPosts, setFilteredNewsPosts] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const newsPostsData = await getNewsPosts();
        
        // Sort news posts by date, with latest posts at the top
        const sortedNewsPosts = newsPostsData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        
        setAllNewsPosts(sortedNewsPosts);
      } catch (error) {
        console.error("Error fetching newsPosts:", error);
      }
    };
    fetchNewsPosts();
  }, [getNewsPosts]);

  useEffect(() => {
    if (selectedYear === "all") {
      setFilteredNewsPosts(allNewsPosts);
    } else {
      const filtered = allNewsPosts.filter(
        (post) => new Date(post.date).getFullYear().toString() === selectedYear
      );
      setFilteredNewsPosts(filtered);
    }
  }, [selectedYear, allNewsPosts]);

  return (
    <Layout>
      <section className="lg:flex lg:w-full lg:items-start">
        <aside className="lg:pt-16 lg:mx-10 lg:fixed lg:top-0 lg:left-0 lg:overflow-x-hidden lg:h-screen lg:z-10 lg:mx-10">
          <div className="mt-24 mb-5 flex justify-start items-center mx-3">
            <h2 className="text-left font-satoshi font-medium tracking-wide uppercase text-blueberry/70 text-lg mb-5 lg:text-[10vw] lg:mx-5 lg:mb-5 leading-none">
              Senaste händelserna
            </h2>
          </div>
          <section className="mb-5">
            <p className="font-cabinet font-regular leading-[3rem] text-[15vw] text-blueberry mx-3">
              Uppdatera dig om de senaste <i>nyheterna.</i>
            </p>
          </section>
          <section className="flex gap-2 justify-start mx-3">
            <FilterButton
              className={`uppercase font-medium ${
                selectedYear === "all" ? "bg-blueberry text-white" : ""
              }`}
              onClick={() => setSelectedYear("all")}
            >
              Alla
            </FilterButton>{" "}
            <FilterButton
              className={`uppercase font-medium ${
                selectedYear === "2024" ? "bg-blueberry text-white" : ""
              }`}
              onClick={() => setSelectedYear("2024")}
            >
              2024
            </FilterButton>{" "}
          </section>
        </aside>

        <section className="mx-3 lg:mx-10 lg:mt-64 lg:ml-[30%] lg:mr-10 lg:w-[70%] lg:flex lg:flex-col">
          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {allNewsPosts.map((post, index) => (
              <NewsComponent key={index} post={post} />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}
