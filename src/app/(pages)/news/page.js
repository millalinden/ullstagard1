"use client";
import Layout from "../../components/Header/layout";
import useContentful from "../../utils/useContentful";
import React, { useEffect, useState } from "react";

export default function News() {
  const { getNewsPosts, renderRichTextDocument } = useContentful();
  const [allNewsPosts, setAllNewsPosts] = useState([]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const newsPostsData = await getNewsPosts();
        setAllNewsPosts(newsPostsData);
      } catch (error) {
        console.error("Error fetching newsPosts:", error);
      }
    };
    fetchNewsPosts();
  }, [getNewsPosts]);

  return (
    <Layout>
      <section className="lg:flex lg:w-full lg:items-start">
        <aside className="lg:pt-16 mx-5 lg:mx-10 lg:fixed lg:top-0 lg:left-0 lg:overflow-x-hidden  lg:h-screen lg:z-10 lg:mx-10">
          <div className=" lg:w-5/12 ">
            <h2 className="animation-scaleDown delay-500 uppercase font-black text-blueberry">
              Nyheter
            </h2>
          </div>
          <section className="lg:w-5/12">
            <div className="mb-5 ">
              <hr className="border-black lg:border-black" />
              <p className="font-erode text-[3.5vw] py-1 lg:text-[1vw]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div>
              <h2 className="uppercase font-satoshi font-black text-[4vw] lg:text-[1vw]">
                Filter
              </h2>
              <hr className="border-black lg:border-black" />
              <ul className="text-[4vw] font-satoshi py-1 flex justify-start lg:flex-col lg:text-[1vw]">
                <li className="pr-2">Alla</li>
                <li>2024</li>
              </ul>
            </div>
          </section>
        </aside>

        <section className="mx-5 lg:mx-10 lg:mt-64 lg:ml-[30%] lg:mr-10 lg:w-[70%] lg:flex lg:flex-col">
          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {allNewsPosts.map((post, index) => (
              <div key={index} className="mb-8">
                {/* Container for each news post */}
                <div className="flex flex-col">
                  {/* Render the image first */}
                  {renderRichTextDocument(post.image)}

                  {/* Render the date */}
                  <p className="font-satoshi text-[2vw] text-blueberryLight lg:text-[1vw] mt-1">
                    {new Date(post.date).toLocaleDateString()}
                  </p>

                  {/* Render the title */}
                  <h4 className="font-bold mt-1 font-satoshi lg:text-[1.6vw]">
                    {post.title}
                  </h4>

                  {/* Render the rest of the description */}
                  <div className="font-erode">
                    {renderRichTextDocument(post.description)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
}
