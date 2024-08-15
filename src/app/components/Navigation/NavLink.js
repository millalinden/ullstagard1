"use client";
import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-erode text-[5vw] lg:text-[1.1vw] text-blueberry list-none"
    >
      {children}
    </Link>
  );
}
