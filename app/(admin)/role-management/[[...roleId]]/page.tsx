"use client";
import { useRef } from "react";
import RoleCard from "./components/Role-Card";
import AddRoleBtn from "./components/Add-Role-Btn";
import RoleSetting from "./components/Role-Setting";
import Modal from "@COM/(admin)/utils/Modal";

type Params = {
  params: {
    roleId: string;
  };
};

export default function Page({ params }: Params) {
  console.log(params.roleId);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  return (
    <>
      <div className="col-span-3 lg:col-span-1 border-e px-5 py-8 flex flex-col">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <div className="text-lg font-semibold mt-5 mb-1 flex justify-between lg:block">
          <span>所有角色</span>
          <AddRoleBtn className="inline lg:hidden" />
        </div>
        <div className="card-group flex flex-col mt-2">
          <RoleCard />
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:col-span-2">
        <RoleSetting />
      </div>
      <Modal ref={modalRef} isModalOpen={params.roleId ? true : false}>
        <RoleSetting />
      </Modal>
    </>
  );
}
