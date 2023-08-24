import Image from "next/image";
import NavbarContent from "./NavbarContent";
import Logo from "@/assets/logo.png";
export default function NavbarLayout() {
  return (
    <div className="w-full navbar bg-white py-0">
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
      <NavbarContent />
    </div>
  );
}
