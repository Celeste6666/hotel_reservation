"use client";
import { MouseEvent, useState } from "react";

import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface ICustomEvent<T> extends MouseEvent<T> {
  target: HTMLElement & {
    getBoundingClientRect: () => { right: number; bottom: number };
  };
}

function Dropdown<T>(props: { data: T }) {
  const [open, setOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const onClick = (e: ICustomEvent<HTMLButtonElement>) => {
    if (!open) {
      const { right, bottom } = e.target!.getBoundingClientRect();
      setMousePos({
        x: right,
        y: bottom,
      });
    }
    setOpen((pre) => !pre);
  };
  return (
    <div
      className="dropdown w-full h-full flex justify-center"
      onMouseLeave={() => setOpen(false)}
    >
      <button className="m-1 btn btn-ghost" onClick={onClick}>
        <EllipsisVerticalIcon className="w-5 h-5" />
      </button>
      {open &&
        createPortal(
          <ul
            className={twMerge(
              `p-2 shadow menu absolute z-10 bg-zinc-800 text-white  rounded-box`
            )}
            style={{
              top: `${mousePos.y}px`,
              left: `${mousePos.x}px`,
            }}
          >
            <li>
              <button className="hover:text-white">編輯</button>
            </li>
            <li>
              <button className="hover:text-white">刪除</button>
            </li>
          </ul>,
          document.body as HTMLBodyElement
        )}
    </div>
  );
}

export default Dropdown;
