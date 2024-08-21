"use client";
import Layout from "../components/Header/layout";
import useContentful from "../utils/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";

export default function News() {
  const { getNewsPosts } = useContentful();
  const [allNewsPosts, setAllNewsPosts] = useState([]);

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
  }, [getNewsPosts]);

  return (
    <Layout>
      <section>
        <div className="my-20">
          <h2 className="uppercase font-satoshi font-[900] lg:text-[5vw] text-blueberry text-center break-all">
            Senaste Händelserna
          </h2>
        </div>
      </section>

      <section className="lg:mx-20">
        {allNewsPosts.map((post, index) => (
          <div key={index} className="mb-8">
            <hr className="lg:border-black" />
            <div className="flex justify-between items-start">
              {/* Date on the left */}
              <p className="font-satoshi lg:text-[1vw]  mt-1 flex-shrink-0">
                {new Date(post.date).toLocaleDateString()}
              </p>

              {/* Title and description on the right */}
              <div className="font-erode flex flex-col w-full lg:w-3/6 lg:mr-10 lg:mt-5">
                <h4 className="font-[500] lg:text-[1.3vw] text-left">
                  {post.title}
                </h4>
                <p className="lg:text-[1.2vw] text-left">
                  {documentToReactComponents(post.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
