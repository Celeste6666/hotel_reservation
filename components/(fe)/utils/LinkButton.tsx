"use client"
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
};

const LinkButton = ({ href }: Props) => {
  return (
    <button className="btn btn-primary rounded-full mt-20 px-10 text-white self-center">
      <Link href={href}>看全部</Link>
    </button>
  );
};

export default LinkButton;
