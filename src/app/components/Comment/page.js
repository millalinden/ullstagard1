"use client";
import React, { useEffect, useState } from "react";
import useContentful from "@/app/utils/useContentful";
export default function Comment() {
  const { getGuestbookComment } = useContentful();
  const [comments, setComments] = useState([]);

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
    <div className="flex flex-col items-center">
      {comments.map((comment, index) => (
        <div key={index} className="lg:w-2/4">
          <p className="font-erode lg:text-[1.5vw] italic">
            "{comment.comment}"
          </p>
          <div className="lg:flex ">
            <p className="font-medium mt-1 font-satoshi lg:text-[1vw] lg:pr-1 text-[#474747] lg:text-left">
              {comment.firstName}
            </p>
            <p className="font-medium mt-1 font-satoshi lg:text-[1vw] text-[#474747]">
              {comment.lastName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
