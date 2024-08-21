"use client";
import Link from "next/link";

export default function NavLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`font-satoshi font-light mx-5 text-[8vw] lg:text-[1.1vw] text-blueberry list-none whitespace-nowrap ${className}`}
    >
        {children}
    </Link>
  );
}
