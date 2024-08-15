import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className="hidden lg:flex lg:pr-32 lg:ml-6">
      <ul className="flex space-x-32 text-[1.1vw]">
        <li>
          <NavLink href="/">Hem</NavLink>
        </li>
        <li>
          <NavLink href="/">Historik</NavLink>
        </li>
        <li>
          <NavLink href="/gallery">Bildgalleri</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Hitta hit</NavLink>
        </li>
        <li>
          <NavLink href="/guestbook">Gästbok</NavLink>
        </li>
      </ul>
    </nav>
  );
}
