import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/page"; // Adjust the import path as per your file structure

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full flex justify-between items-end fixed px-3 py-5 top-0 left-0 bg-[#FFFDFA] z-10 font-erode">
      <div className="flex items-center">
        <Link href="/">
          <div className="w-30 h-30 pl-2">
            <Image
              src="./icons/ullsta1.svg"
              alt="Sketched Image of Ullsta Gard"
              width={100}
              height={100}
              priority // Add priority if it's an important image
            />
          </div>
        </Link>
      </div>

      {/* Mobile Menu (Hamburger Menu) */}
      <div className="block lg:hidden"> {/* Display only on mobile screens */}
        <HamburgerMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      </div>

      {/* Desktop Menu (Horizontal Menu) */}
      <nav className="hidden lg:flex lg:pr-32 lg:ml-6">
        <ul className="flex space-x-32">
          <li>
            <Link href="/">
             Hem
            </Link>
          </li>
          <li>
            <Link href="/">
            Historik
            </Link>
          </li>
          <li>
            <Link href="/gallery">
            Bildgalleri
            </Link>
          </li>
          <li>
            <Link href="/contact">
            Hitta hit
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
