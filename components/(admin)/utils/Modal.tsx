"use client";
import { useState, ReactNode } from "react";

type Props = {
  ref: React.Ref<HTMLDialogElement>;
  isModalOpen: boolean;
  children: ReactNode;
};

const Modal = ({ ref, isModalOpen, children }: Props) => {
  const [open, setOpen] = useState(isModalOpen);
  return (
    <dialog className="modal lg:hidden" ref={ref} open={open}>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-3">Hello!</h3>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setOpen((pre) => !pre)}
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
