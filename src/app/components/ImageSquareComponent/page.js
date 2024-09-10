"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const items = [
  { type: "image", src: "/images/student.jpeg" },
  { type: "image", src: "/images/kalas.jpeg" },
  { type: "placeholder" },
  { type: "image", src: "/images/fördrink.jpeg" },
  { type: "image", src: "/images/dukning.jpg" },
  { type: "placeholder" },
  { type: "image", src: "/images/jul.jpeg" },
  {
    type: "placeholder",
    text: "Ullsta Gård har i generationer varit familjens samlingsplats för både födelsedagar, bröllop och högtider. Huset invigdes 1919 med en storslagen fest, där flaggor vajade och påfåglar stolt spatserade – en inledning till många firanden som följt.",
  },
];

export default function ImageSquareComponent() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const boxes = containerRef.current.querySelectorAll(".box");

    gsap.fromTo(
      boxes,
      { opacity: 0 }, // Start from opacity 0
      {
        opacity: 1, // Animate to opacity 1
        duration: 1, // Duration of the fade-in effect
        ease: "ease.inOut", // Smooth transition
        stagger: {
          amount: 1.5, // Time between the start of each staggered animation
          from: "random", // Start stagger from a random position
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="lg:grid lg:grid-cols-4 lg:gap-2">
      {items.map((item, index) => (
        <div key={index} className="box w-78 aspect-square overflow-hidden">
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-offwhite font-cabinet p-2">
              {" "}
              {item.text}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
