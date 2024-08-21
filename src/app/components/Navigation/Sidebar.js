import NavLink from "./NavLink";
import NavLinkAdd from "./NavLinkAdd";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Sidebar({ isOpen }) {
  const sidebarRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    // Sidebar animation
    timeline.to(sidebarRef.current, {
      y: 0,
      duration: 0.7,
      ease: "sine.inOut",
    });

    // Nav links animation
    timeline.fromTo(
      navLinksRef.current,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "sine.inOut",
        stagger: 0.1,
      },
      "-=0.8"
    );

    if (isOpen) {
      timeline.play();
    } else {
      // Sidebar out
      gsap.to(sidebarRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "sine.inOut",
      });

      // Nav links out
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
    { href: "/history", text: "Historik", number: "02" },
    { href: "/contact", text: "Hitta Hit", number: "03" },
    { href: "/gallery", text: "Bildgalleri", number: "04" },
  ];

  return (
    <nav
      ref={sidebarRef}
      role="navigation"
      className="z-40 fixed left-0 top-20 w-full h-full bg-offwhite bg-opacity-95 backdrop-blur-2xl lg:backdrop-blur-md	px-5 lg:hidden"
    >
      <div className="flex flex-col pt-6">
        <ul className="flex flex-col text-right">
          {links.map((link, index) => (
            <li
              key={index}
              ref={(el) => (navLinksRef.current[index] = el)}
              className="pb-5"
            >
              {link.number}
              <NavLink href={link.href}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col text-right pt-28">
          <li
            ref={(el) => (navLinksRef.current[links.length] = el)}
            className="pb-2"
          >
            <NavLinkAdd href="/news">Senaste Händelserna</NavLinkAdd>
          </li>
          <li
            ref={(el) => (navLinksRef.current[links.length + 1] = el)}
            className="pb-5"
          >
            <NavLinkAdd href="/guestbook">Gästbok</NavLinkAdd>
          </li>
        </ul>
      </div>
    </nav>
  );
}
