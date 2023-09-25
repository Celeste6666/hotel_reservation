import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {};

const NavbarEnd = (props: Props) => {
  return (
    <div className="navbar-end flex items-center justify-end">
      <Link href="/register">
        <UserCircleIcon className="w-10 h-10" />
      </Link>
    </div>
  );
};

export default NavbarEnd;
