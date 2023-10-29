import React from "react";

type Props = {
  desc: string;
  mainNumber: number;
};

const Stat = ({ desc, mainNumber }: Props) => {
  return (
    <div className="stat bg-warning rounded-lg flex flex-col items-center">
      <div className="stat-value">{mainNumber}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
};

export default Stat;
