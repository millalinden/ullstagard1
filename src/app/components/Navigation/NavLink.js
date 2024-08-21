"use client";
import Link from "next/link";

export default function NavLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`font-satoshi font-light mx-5 lg:text-[1.1vw] text-blueberry list-none ${className}`}
    >
        {children}
  
    </Link>
  );
}
