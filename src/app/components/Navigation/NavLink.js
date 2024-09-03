"use client";
import Link from "next/link";

export default function NavLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`font-satoshi font-light mx-5 text-[8vw] md:text-[5vw] lg:text-[0.8vw] lg:tracking-widest lg:uppercase text-blueberry list-none whitespace-nowrap ${className}`}
    >
        {children}
    </Link>
  );
}
