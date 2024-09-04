"use client";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/page"; // Adjust the import path according to your file structure
import Link from "next/link";

const settings = {
  dots: true, // Show pagination dots
  infinite: true, // Infinite scrolling
  speed: 400, // Transition speed
  slidesToShow: 1, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at once
  centerMode: true, // Center the current slide
  centerPadding: "0", // No extra padding around the centered slide
  arrows: false, // Hide arrows (set to true if you want to show arrows)
};

export default function CarouselContainer() {
  return (
    <div className="mt-3 mb-16 lg:mt-10">
      <Slider {...settings}>
        <div>
          <Link href="/history">
            <Card
              src="/images/landscape.jpeg"
              title="Historik"
              description="Husets historia & Familjen Lindén"
              className="lg:w-[500px]"
            />
          </Link>
        </div>
        <div>
          <Link href="/news">
            <Card
              src="/images/forsnacks.jpeg"
              title="Nyheter"
              description="Uppdatera dig om det senaste"
              className="lg:w-[500px]"
            />
          </Link>
        </div>
        <div>
          <Link href="/guestbook">
            <Card
              src="/images/gularummet.jpeg"
              title="Gästbok"
              description="Läs om minnen & dela dina!"
              className="lg:w-[500px]"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}
