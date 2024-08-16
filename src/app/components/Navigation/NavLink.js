"use client";
import Link from "next/link";

export default function NavLink({ href, children, className="" }) {
  return (
    <Link
      href={href}
      className={`font-erode text-[8vw] lg:text-[1.1vw] text-blueberry list-none ${className}`}
    >
      {children}
    </Link>
  );
}
