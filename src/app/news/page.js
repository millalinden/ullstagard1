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
        // If updateDisplayedNewsPosts is needed, make sure it's defined
        // updateDisplayedNewsPosts();
      } catch (error) {
        console.error("Error fetching newsPosts:", error);
      }
    };
    fetchNewsPosts();
  }, [getNewsPosts]);

  return (
    <Layout>
      <section className="mt-28 mb-10 mx-5">
        <div className=" mx-5">
          <h2 className="uppercase font-satoshi font-black text-[10vw] lg:text-[5vw] text-blueberry text-left">
            Senaste Händelserna
          </h2>
        </div>
      </section>

      <section className="mx-10 lg:mx-20">
        {allNewsPosts.map((post, index) => (
          <div key={index} className="mb-8">
            <hr className="border-t border-black lg:border-black" />
            <div className="flex justify-between items-start">
              <p className="font-satoshi text-[2vw] lg:text-[1vw] mt-1 flex-shrink-0">
                {new Date(post.date).toLocaleDateString()}
              </p>

              {/* Title and description on the right */}
              <div className="font-erode flex flex-col w-full w-4/6 lg:w-3/6 lg:mr-10 lg:mt-5">
                <h4 className="font-[500] mt-1 lg:text-[1.3vw] text-left">
                  {post.title}
                </h4>
                <div className="lg:text-[1.2vw] text-left">
                  {documentToReactComponents(post.description)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
