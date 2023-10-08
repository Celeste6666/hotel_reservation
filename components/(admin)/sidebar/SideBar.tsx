"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@ASSET/logo2.png";
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { admin_navLinks } from "@CON/navLinks";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

type Props = {};

const SideBar = (props: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="admin-drawer">
      <div
        className={twMerge(
          "flex flex-col justify-between overflow-hidden menu p-4 pe-0 min-h-screen bg-primary text-white transition-all duration-300",
          isOpen ? "w-64" : "w-24"
        )}
      >
        <ul>
          {/* Sidebar content here */}
          <li className="mb-16">
            <Link
              href="/dashboard"
              className="flex items-center flex-nowrap hover:bg-transparent"
            >
              <Image src={Logo} className="w-8 h-8" alt="LOGO" />
              <span
                className={twMerge(
                  "text-lg font-bold text-white whitespace-nowrap",
                  isOpen ? "opacity-100" : "hidden opacity-0"
                )}
              >
                Celeste 旅遊訂房網
              </span>
            </Link>
          </li>
          {admin_navLinks.map(({ href, name, key, icon }) => (
            <li className="my-1 group" key={key}>
              <Link
                href={href}
                className={twMerge(
                  "admin-nav-link",
                  pathname === href ? "active" : ""
                )}
              >
                {icon && icon({ className: "w-8 h-8" })}
                <span
                  className={twMerge(
                    "ms-5 text-lg whitespace-nowrap",
                    isOpen ? "opacity-100" : "hidden opacity-0"
                  )}
                >
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={twMerge(
            "flex items-center pe-5",
            isOpen ? "justify-between" : "flex-col"
          )}
        >
          <button className="btn btn-ghost my-2">
            <ArrowRightOnRectangleIcon className="w-8 h-8" />
            <span
              className={twMerge(
                "text-lg whitespace-nowrap",
                isOpen ? "flex items-center opacity-100" : "hidden opacity-0"
              )}
            >
              登出
            </span>
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => setIsOpen((cur) => !cur)}
          >
            {isOpen ? (
              <ArrowsPointingInIcon className="w-8 h-8" />
            ) : (
              <ArrowsPointingOutIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
