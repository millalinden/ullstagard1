import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


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
      <div ref={commentRef} className="mb-16 lg:w-3/4 lg:flex lg:flex-col lg:items-start">
        <p className="font-cabinet text-sm italic lg:text-[1.5vw] lg:leading-7 lg:mb-5">{comment.comment}</p>
        <div className="flex">
          <p className="font-medium mt-1 font-cabinet pr-1 text-sm lg:text-[1vw] text-[#474747]">
            {comment.firstName}
          </p>
          <p className="font-medium mt-1 font-cabinet text-sm lg:text-[1vw] text-[#474747]">
            {comment.lastName}
          </p>
        </div>
        <div className="relative mt-2">
          <hr
            ref={lineRef}
            className="absolute bottom-0 left-0 w-full border-blueberry"
          />
        </div>
      </div>
    );
  };
  
  export default CommentItem;