"use client";
import { usePathname } from "next/navigation";
import { admin_navLinks } from "@/constant/navLinks";
import { NaveLink } from "@/types";

const NavHeader = () => {
  // 获取当前路由的 pathname
  const pathname = usePathname();
  const pageTitle: NaveLink | undefined = admin_navLinks.find(
    ({ href }) => href === pathname
  );
  return (
    <div className="bg-primary bg-opacity-30 rounded-2xl py-8 px-5">
      <h4 className="leading-normal">{pageTitle?.name}</h4>
      <div>{pageTitle?.description}</div>
    </div>
  );
};

export default NavHeader;