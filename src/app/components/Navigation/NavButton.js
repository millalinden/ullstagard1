"use client";

export default function NavButton({ isOpen, toggleMenu }) {
  return (
    <div className="relative pr-2">
      <button
        className="text-3xl focus:outline-none"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        role="button"
      >
        <div
          className={`relative w-6 h-6 transition-transform duration-800 ${
            isOpen ? "open" : ""
          }`}
        >
          <span
            className={`block absolute left-0 h-[1px] w-6 bg-black transition-transform duration-500 ${
              isOpen ? "transform rotate-45 top-1/2" : "top-1"
            }`}
          ></span>
          <span
            className={`block absolute left-0 h-[1px] w-6 bg-black transition-transform duration-500 ${
              isOpen ? "transform -rotate-45 top-1/2" : "top-3"
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
}
