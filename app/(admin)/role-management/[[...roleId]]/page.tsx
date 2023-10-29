"use client";
import { useRef } from "react";
import RoleCard from "./components/Role-Card";
import AddRoleBtn from "./components/Add-Role-Btn";
import RoleSetting from "./components/Role-Setting";
import Modal from "@COM/(admin)/utils/Modal";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type Params = {
  params: {
    roleId: string;
  };
};

export default function Page({ params }: Params) {
  console.log(params.roleId);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  
  // TODO: filter active role
  
  
  return (
    <>
      <div className="col-span-3 lg:col-span-1 border-e px-5 py-8 flex flex-col">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <div className="text-lg font-semibold mt-5 mb-1 flex justify-between lg:block">
          <span className="flex justify-start items-center">
            <span>所有角色</span>
            <span className="w-8 h-8 rounded-full bg-primary-light mx-3 tooltip" data-tip="啟用"></span>
            <span className="w-8 h-8 rounded-full bg-secondary bg-opacity-30 tooltip" data-tip="停用"></span>
          </span>
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
