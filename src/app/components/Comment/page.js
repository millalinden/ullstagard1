"use client";
import React, { useEffect, useRef } from "react";
import useContentful from "@/app/utils/useContentful";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Comment() {
  const { getGuestbookComment } = useContentful();
  const [comments, setComments] = React.useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getGuestbookComment();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchComments();
  }, [getGuestbookComment]);

  return (
    <div className="flex flex-col items-start mx-3">
      {comments.map((comment, index) => (
        <CommentItem key={index} comment={comment} />
      ))}
    </div>
  );
}

const CommentItem = ({ comment }) => {
  const commentRef = useRef();
  const lineRef = useRef();

  useGSAP(() => {
    gsap.from(commentRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: commentRef.current,
        start: "top 80%",
        stagger:1,
        toggleActions: "play none none reverse",
      },
    });

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: commentRef.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={commentRef} className="mb-16 lg:w-2/5 lg:flex lg:flex-col lg:items-start lg:border lg:border-blueberry lg:rounded-xl lg:p-3">
      <p className="font-cabinet lg:text-[1vw] italic">{comment.comment}</p>
      <div className="flex">
        <p className="font-medium mt-1 font-cabinet pr-1 lg:text-[1vw] text-[#474747] lg:text-left">
          {comment.firstName}
        </p>
        <p className="font-medium mt-1 font-cabinet lg:text-[1vw] text-[#474747]">
          {comment.lastName}
        </p>
      </div>
      <div className="relative mt-2">
        <hr
          ref={lineRef}
          className="absolute bottom-0 left-0 w-full border-blueberry "
        />
      </div>
    </div>
  );
};
