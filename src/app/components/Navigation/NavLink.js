import Link from "next/link";

export default function NavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-satoshi font-regular mx-5 text-[8vw] md:text-[5vw] lg:text-[0.8vw] lg:tracking-widest lg:uppercase text-blueberry list-none whitespace-nowrap"
    >
      {children}
    </Link>
  );
}
