"use client";
import { navLinks } from "@CON/navLinks";
import Link from "next/link";
function NavbarContent({ pathname }: { pathname: string }) {
  return (
    <div className="navbar-center py-0 hidden lg:flex">
      <ul className="px-1 text-lg py-0 flex flex-row">
        {navLinks.map(({ name, href, key, isShow = true }) => {
          const isActive = pathname === href;
          return isShow ? (
            <li key={key}>
              <Link
                className={`nav-link ${isActive ? "active" : ""}`}
                href={href}
              >
                {name}
              </Link>
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
    </div>
  );
}

export default NavbarContent;
