"use client";
import Image from "next/image";
import NavLink from "../Navigation/NavLink";
import NavButton from "../Navigation/NavButton";
import NavBar from "../Navigation/NavBar";
import { useState, useEffect } from "react";
import Sidebar from "../Navigation/Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (
        currentScrollPosition > lastScrollPosition &&
        currentScrollPosition > 50
      ) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Check if the screen width is <= 768px (mobile)
      if (isMobile) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Initialize scroll listener based on screen size
    handleResize();

    // Add resize listener to recheck screen size when the window is resized
    window.addEventListener("resize", handleResize);

    // Clean up scroll and resize listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollPosition]);

  return (
    <>
      <header
        className={`w-full flex justify-between items-end fixed pr-5 lg:px-5 py-3 lg:py-5 top-0 bg-offwhite lg:bg-opacity-60 lg:backdrop-blur-xl z-40 transition-transform duration-300 ${
          isHeaderVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        {" "}
        <div className="flex items-center">
          <NavLink href="/">
            <div
              className={`relative z-10 transition-opacity duration-300
              }`}
            >
              <Image
                src="/icons/ullsta1.svg"
                alt="Sketched Image of Ullsta Gard by Olle Qvennerstedt"
                width={90}
                height={90}
                className=""
              />
            </div>
          </NavLink>
        </div>
        {/* Mobile Menu (Hamburger Menu) */}
        <div className="block lg:hidden z-10">
          <NavButton isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />
        </div>
        {/* Desktop Menu (Horizontal Menu) */}
        <div className="hidden lg:block lg:leading-none	">
          <NavBar className="" />
        </div>
      </header>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

    </>
  );
}
