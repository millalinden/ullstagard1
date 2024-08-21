import NavLink from "./NavLink";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Sidebar({ isOpen }) {
  const sidebarRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    // Sidebar animation
    timeline.to(sidebarRef.current, {
      y: "100%",
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
        duration: 0.8,
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
    { href: "/", text: "Hem" },
    { href: "/history", text: "Historik" },
    { href: "/contact", text: "Hitta Hit" },
    { href: "/gallery", text: "Bildgalleri" },
  ];

  return (
    <nav
      ref={sidebarRef}
      role="navigation"
      className="z-10 fixed left-0 top-30 w-full h-full bg-[#FFFDFA] lg:hidden"
    >
      <div className="flex flex-col">
        <ul className="flex flex-col text-right">
          {links.map((link, index) => (
            <li
              key={index}
              ref={(el) => (navLinksRef.current[index] = el)}

            >
              <NavLink href={link.href}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}



