"use client";
import React, { useEffect, useRef } from "react";
import useContentful from "@/app/utils/useContentful";
import { useState } from "react";
import CommentItem from "../CommentItem/page";


export default function Comment() {
  const { getGuestbookComment } = useContentful();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getGuestbookComment();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [getGuestbookComment]);

  return (
    <>
      {comments.map((comment, index) => (
        <CommentItem key={index} comment={comment} />
      ))}
    </>
  );
}
