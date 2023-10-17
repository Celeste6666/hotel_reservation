import React from "react";
import AddRoleBtn from "./Add-Role-Btn";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Tree from "@/components/(admin)/utils/Tree";

type TreeData = {
  id: string;
  title: string;
  children?: TreeData[];
};
const treeData: TreeData[] = [
  { id: "1", title: "首頁" },
  {
    id: "2",
    title: "權限管理",
    children: [
      { id: "21", title: "讀取" },
      { id: "22", title: "寫入" },
    ],
  },
  {
    id: "3",
    title: "用戶管理",
    children: [
      { id: "31", title: "讀取" },
      { id: "32", title: "寫入" },
    ],
  },
  {
    id: "3",
    title: "用戶管理",
    children: [
      { id: "31", title: "讀取" },
      { id: "32", title: "寫入" },
    ],
  },

  {
    id: "3",
    title: "用戶管理",
    children: [
      { id: "31", title: "讀取" },
      { id: "32", title: "寫入" },
    ],
  },

  {
    id: "3",
    title: "用戶管理",
    children: [
      { id: "31", title: "讀取" },
      { id: "32", title: "寫入" },
    ],
  },

  {
    id: "3",
    title: "用戶管理",
    children: [
      { id: "31", title: "讀取" },
      { id: "32", title: "寫入" },
    ],
  },
];

const RoleSetting = () => {
  return (
    <>
      <div className="border-b p-4 flex justify-between items-center">
        <Bars3Icon className="hidden lg:inline w-7 h-7" />
        <AddRoleBtn className="hidden lg:inline" />
      </div>
      <Tree<TreeData> treeData={treeData} />
    </>
  );
};

export default RoleSetting;
