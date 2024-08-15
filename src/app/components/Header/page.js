// Header.js
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

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="w-full flex justify-between items-end fixed px-3 py-5 top-0 left-0 bg-[#FFFDFA] z-10 font-erode">
      <div className="flex items-center">
        <NavLink href="/">
        <div className="relative"> {/* Ensure dimensions are respected */}
            <Image
              src="/icons/ullsta1.svg"
              alt="Sketched Image of Ullsta Gard"
              width={100}
              height={100}
            />
          </div>
        </NavLink>
      </div>

      {/* Mobile Menu (Hamburger Menu) */}
      <div className="block lg:hidden">
        <NavButton isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />
      </div>

      {/* Desktop Menu (Horizontal Menu) */}
      <NavBar />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </header>
  );
}
