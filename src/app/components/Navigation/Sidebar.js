import NavLink from "./NavLink";
import NavLinkAdd from "./NavLinkAdd";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);
  const navLinksRef = useRef([]);

  useLayoutEffect(() => {
    gsap.set(sidebarRef.current, { y: "-100%" });

    if (isOpen) {
      gsap.to(sidebarRef.current, {
        y: 0,
        duration: 0.7,
        ease: "sine.inOut",
      });
      gsap.to(navLinksRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "sine.inOut",
        stagger: 0.1,
      });
    } else {
      gsap.to(sidebarRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "sine.inOut",
      });
      gsap.to(navLinksRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "sine.inOut",
        stagger: 0.03,
      });
    }
  }, [isOpen]);

  const links = [
    { href: "/", text: "Hem", number: "01" },
    { href: "/history", text: "Historia", number: "02" },
    { href: "/contact", text: "Hitta Hit", number: "03" },
    { href: "/gallery", text: "Bildgalleri", number: "04" },
  ];

  return (
    <nav
      ref={sidebarRef}
      role="navigation"
      className="z-20 fixed left-0 top-0 w-full h-full bg-offwhite bg-opacity-95 backdrop-blur-xl px-5 lg:hidden"
      style={{ transform: "translateY(-100%)" }} // Set initial transform to hide the sidebar
    >
      <div className="flex flex-col pt-32">
        <ul className="flex flex-col text-right">
          {links.map((link, index) => (
            <li
              key={index}
              ref={(el) => (navLinksRef.current[index] = el)}
              className="pb-5"
            >
              {link.number}
              <NavLink href={link.href} onClick={onClose}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col text-right pt-28">
          <li
            ref={(el) => (navLinksRef.current[links.length] = el)}
            className="pb-2"
          >
            <NavLinkAdd href="/news" onClick={onClose}>Senaste Händelserna</NavLinkAdd>
          </li>
          <li
            ref={(el) => (navLinksRef.current[links.length + 1] = el)}
            className="pb-5"
          >
            <NavLinkAdd href="/guestbook" onClick={onClose}>Gästbok</NavLinkAdd>
          </li>
        </ul>
      </div>
    </nav>
  );
}
