import { ReactNode } from "react";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <div className="card rounded-lg w-full bg-base-100 border border-zinc-200 shadow-sm">
      <div className="card-body p-0 grid grid-cols-3 gap-0">{children}</div>
    </div>
  );
};

export default layout;
