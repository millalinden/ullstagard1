"use client";
import Image from "next/image";
import NavLink from "../Navigation/NavLink";
import NavButton from "../Navigation/NavButton";
import NavBar from "../Navigation/NavBar";
import { useState } from "react";
import Sidebar from "../Navigation/Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="w-full flex justify-between items-end fixed pr-5 py-5 top-0 bg-offwhite bg-opacity-80 backdrop-blur-xl z-50">
        <div className="flex items-center">
          <NavLink href="/">
            <div className="relative z-10">
              <Image
                src="/icons/ullsta1.svg"
                alt="Sketched Image of Ullsta Gard"
                width={100}
                height={100}
                className="mb-1"
              />
            </div>
          </NavLink>
        </div>

        {/* Mobile Menu (Hamburger Menu) */}
        <div className="block lg:hidden z-10">
          <NavButton isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />
        </div>

        {/* Desktop Menu (Horizontal Menu) */}
        <div className="hidden lg:block ">
          <NavBar />
        </div>
      </header>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />
    </>
  );
}
