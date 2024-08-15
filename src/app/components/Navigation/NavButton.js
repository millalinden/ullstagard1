// NavButton.js
"use client"; // Mark as client component
import { useState } from "react";

export default function NavButton({ isOpen, toggleMenu }) {
  return (
    <div className="relative pr-2 bg-[#FFFDFA]">
      <button
        className="text-3xl focus:outline-none"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="menu"
      >
        <span className="block h-[1.5px] w-6 bg-black my-1"></span>
        <span className="block h-[1.5px] w-6 bg-black my-1"></span>
        <span className="block h-[1.5px] w-6 bg-black my-1"></span>
      </button>
    </div>
  );
}
