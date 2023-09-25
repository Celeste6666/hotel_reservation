import React, { ReactNode } from "react";
import Image from "next/image";
import userBg from "@ASSET/user.png";

const CardWithBg = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 my-8 text-center flex justify-center items-center">
        <figure className="w-1/2 px-4  bg-gradient-to-b from-orange-400 to-blue-200">
          <Image src={userBg} alt="Album" className="w-full" />
        </figure>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default CardWithBg;
