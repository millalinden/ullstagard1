"use client";
import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const extractImage = (document) => {
  if (!document) return null; // Handle empty or undefined documents

  let imageNode = null;

  documentToReactComponents(document, {
    renderNode: {
      "embedded-asset-block": (node) => {
        if (!imageNode) {
          const { file, title } = node.data.target.fields;
          const imageUrl = file.url.startsWith("//")
            ? `https:${file.url}`
            : file.url;
          imageNode = (
            <div className="mb-4 w-full h-full overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={imageUrl}
                alt={title}
                width={500}
                height={500}
              />
            </div>
          );
        }
        return null;
      },
      "embedded-entry-block": () => null,
      paragraph: () => null,
    },
  });

  return imageNode;
};

const renderDescriptionWithoutImage = (document) => {
  if (!document) return null; // Handle empty or undefined documents

  return documentToReactComponents(document, {
    renderNode: {
      "embedded-asset-block": () => null,
      "embedded-entry-block": () => null,
      paragraph: (node, children) => <p className="mb-4">{children}</p>,
    },
  });
};


const NewsComponent = ({ post }) => {
  const newsRef = useRef();
  useGSAP(() => {
    gsap.from(newsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: newsRef.current,
        start: "top 60%",
        stagger: 1,
        toggleActions: "play none none reverse",
      },
    });
  }, []);


  if (!post || !post.description) {
    return null; // or return a fallback UI
  }

  return (
    <div className="mb-5" ref={newsRef}>
      {/* Container for each news post */}
      <div className="flex flex-col">
        {/* Extract and render the image */}
        <div className="md:h-80 lg:h-96 lg:pb-3">{extractImage(post.description)}</div>

        {/* Render the date */}
        <div className="flex items-center gap-6 mb-4">
          {/* Render the title */}
          <p className="uppercase text-[4.5vw] px-2 py-1 tracking-wide leading-none border border-blueberry rounded-full mt-1 font-cabinet md:text-[1.5vw] lg:text-[1vw]">
            Nyhet
          </p>
          <p className="font-cabinet text-[4.5vw] md:text-[2.5vw] font-medium text-blueberryLight lg:text-[1vw] mt-1">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>

        {/* Render the title */}
        <h4 className=" text-[7vw] tracking-wide leading-none rounded-full mt-1 font-cabinet md:text-[4vw] lg:text-[2vw]">
          {post.title}
        </h4>

        {/* Render the rest of the description without images */}
        <div className="font-cabinet mt-4 lg:text-[1.3vw]">
          {renderDescriptionWithoutImage(post.description)}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
