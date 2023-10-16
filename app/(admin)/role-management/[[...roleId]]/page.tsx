import Tree from "@/components/(admin)/utils/Tree";
import RoleCard from "./components/Role-Card";
import { Bars3Icon } from "@heroicons/react/24/outline";

type Params = {
  params: {
    roleId: string;
  };
};

type TreeData = {
  id: string;
  title: string;
  children?: TreeData[];
};

export default function page({ params }: Params) {
  console.log(params.roleId);
  const treeData: TreeData[] = [
    { id: "1", title: "首頁" },
    { id: "2", title: "權限管理", children: [{ id: "21", title: "讀取" }, { id: "22", title: "寫入" }] },
    { id: "3", title: "用戶管理", children: [{ id: "31", title: "讀取" }, { id: "32", title: "寫入" }] },
    { id: "3", title: "用戶管理", children: [{ id: "31", title: "讀取" }, { id: "32", title: "寫入" }] },
  
    { id: "3", title: "用戶管理", children: [{ id: "31", title: "讀取" }, { id: "32", title: "寫入" }] },

    { id: "3", title: "用戶管理", children: [{ id: "31", title: "讀取" }, { id: "32", title: "寫入" }] },

    { id: "3", title: "用戶管理", children: [{ id: "31", title: "讀取" }, { id: "32", title: "寫入" }] },

  ];
  return (
    <>
      <div className="col-span-1 border-e px-5 py-8 flex flex-col">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <p className="text-lg font-semibold mt-5 mb-1">所有角色</p>
        <RoleCard />
      </div>
      <div className="col-span-2">
        <div className="border-b p-4 flex justify-between items-center">
          <Bars3Icon className="w-7 h-7" />
          <button className="btn btn-warning btn-sm text-white">新增角色</button>
        </div>
        <Tree<TreeData> treeData={treeData} />
      </div>
    </>
  );
}
