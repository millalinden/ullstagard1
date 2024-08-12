import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative pr-2">
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
      {/* Menu container */}
      <nav
        role="navigation"
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform ease-in-out duration-700	 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-3 right-3 text-xl focus:outline-none"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-end justify-start h-full mt-32">
          <Link href="/">
            <li className="py-4 mr-5 cursor-pointer text-3xl tracking-wide	 ">
              Hem
            </li>
          </Link>
          <Link href="/">
            <li className="py-4 mr-5 cursor-pointer text-3xl tracking-wide	">
              Historik
            </li>
          </Link>
          <Link href="/gallery">
            <li className="py-4 mr-5 cursor-pointer text-3xl tracking-wide	">
              Bildgalleri
            </li>
          </Link>
          <Link href="/contact">
            <li className="py-4 mr-5 cursor-pointer text-3xl tracking-wide">
              Hitta Hit
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
