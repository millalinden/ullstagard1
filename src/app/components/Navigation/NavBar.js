import NavLink from "./NavLink";
import NavLinkAdd from "./NavLinkAdd";

export default function NavBar() {
  return (
    <nav className="hidden lg:flex lg:items-center lg:justify-between lg:ml-6 lg:mt-3">
      <div className="flex-1 flex justify-start pr-52">
        <ul className="flex space-x-16">
          <li>
            <NavLink href="/history">Historia</NavLink>
          </li>
          <li>
            <NavLink href="/gallery">Bildgalleri</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Hitta hit</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex space-x-10">
          <li>
            <NavLinkAdd href="/guestbook">Gästbok</NavLinkAdd>
          </li>
          <li>
            <NavLinkAdd href="/news">Senaste Händelserna</NavLinkAdd>
          </li>
        </ul>
      </div>
    </nav>
  );
}
