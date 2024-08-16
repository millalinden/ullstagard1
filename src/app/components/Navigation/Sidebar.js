// Sidebar.js
import NavLink from "./NavLink";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <nav
      role="navigation"
      className={`fixed top-0 left-0 w-full h-full bg-[#FFFDFA] z-50 transform transition-transform ease-in-out duration-700 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute text-blueberry top-8 right-7 lg:text-[vw] focus:outline-none"
        onClick={onClose}
        aria-label="Close menu"
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
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
      <div className="flex justify-end h-full mt-32 mr-10">
        <ul className="flex flex-col items-end text-[1.6vw]">
          <NavLink href="/" className="pb-5">
            Hem
          </NavLink>
          <NavLink href="/" className="pb-5">
            Historik
          </NavLink>
          <NavLink href="/contact" className="pb-5">
            Hitta Hit
          </NavLink>
          <NavLink href="/gallery" className="pb-5">
            Bildgalleri
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
