"use client";
import { navLinks } from "@CON/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const { key, href, name } = navLinks[0];
  const pathList = pathname.split("/").filter((path) => path !== "");
  return (
    <div
      className={`breadcrumbs w-full flex justify-center mt-16 px-4 py-8 bg-zinc-900 text-white rounded-bl-xl text-lg  ${
        pathname === "/" ? "hidden" : ""
      }`}
    >
      <ul className="container">
        <li key={key}>
          <Link href={href} className="font-semibold">
            {name}
          </Link>
        </li>

        {pathList.map((path, index) => {
          const { key, href, name } =
            navLinks.find(({ key }) => path === key) || navLinks[0];
          return (
            <li key={key}>
              {index === pathList.length - 1 ? (
                name
              ) : (
                <Link href={href} className="font-semibold">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
