"use client";
import { usePathname } from "next/navigation";
import { admin_navLinks } from "@/constant/navLinks";
import { NaveLink } from "@/types";

const NavHeader = () => {
  // 获取当前路由的 pathname
  const pathname = usePathname();
  console.log(pathname);
  const pageTitle: NaveLink | undefined = admin_navLinks.find(({ href }) =>
    pathname.includes(href)
  );
  return (
    <div className="bg-primary-light rounded-2xl py-8 px-5 mb-5">
      <h4 className="leading-normal">{pageTitle?.name}</h4>
      <div>{pageTitle?.description}</div>
    </div>
  );
};

export default NavHeader;
