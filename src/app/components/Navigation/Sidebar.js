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
        className="absolute top-3 right-3 text-xl focus:outline-none"
        onClick={onClose}
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
        <NavLink href="/">Hem</NavLink>
        <NavLink href="/">Historik</NavLink>
        <NavLink href="/gallery">Bildgalleri</NavLink>
        <NavLink href="/contact">Hitta Hit</NavLink>
      </ul>
    </nav>
  );
}
