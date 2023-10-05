"use client";
import Image from "next/image";
import { useScroll } from "ahooks";
import NavbarContent from "./NavbarContent";
import NavbarEnd from "./NavbarEnd";
import Logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
export default function NavbarLayout() {
  const isBrowser = () => typeof window !== "undefined";
  const scroll = { top: 0 };
  const pathname = usePathname();
  return (
    <div
      className={`w-full navbar py-0 fixed top-0 z-10 transition duration-300 flex justify-center ${
        scroll.top > 70 || pathname !== "/"
          ? "bg-white text-dark shadow-md"
          : "bg-transparent text-white nav-border"
      }`}
    >
      <div className="container">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div className="navbar-start w-2/5">
          <Image src={Logo} width={60} height={60} alt="LOGO" />
          {/* <a className="btn btn-ghost normal-case text-xl">馬祖旅行網</a> */}
        </div>
        <NavbarContent pathname={pathname} />
        <NavbarEnd />
      </div>
    </div>
  );
}
