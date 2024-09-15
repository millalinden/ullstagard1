"use client";
import Link from "next/link";

export default function NavLinkAdd({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}

      className="font-satoshi font-regular mx-5 text-[5vw] md:text-[3vw] lg:text-[0.8vw] lg:tracking-widest lg:uppercase whitespace-nowrap	 text-blueberryLight list-none"
    >
        {children}
    </Link>
  );
}
