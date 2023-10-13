import React from "react";
import { BellAlertIcon,  } from "@heroicons/react/24/outline";

type Props = {};

const NavbarLayout = (props: Props) => {
  return (
    <div className="w-full fixed top-0 flex justify-end items-center py-5 px-8">
      <BellAlertIcon className="w-7 h-7 mx-4" />
      <div className="avatar">
        <div className="w-9 h-9 border-2 border-slate-300 rounded-full">
          <img src="https://robohash.org/11" />
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
