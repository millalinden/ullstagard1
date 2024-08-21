"use client";
import Link from "next/link";

export default function NavLinkAdd({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`font-satoshi font-light mx-5 text-[5vw] lg:text-[1.1vw] whitespace-nowrap	 text-blueberryLight list-none ${className}`}
    >
        {children}
    </Link>
  );
}
