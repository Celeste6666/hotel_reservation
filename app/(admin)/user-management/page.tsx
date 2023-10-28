import { ReactNode } from "react";
import Stat from "./components/Stat";
import Table from "@COM/(admin)/utils/Table";
import Dropdown from "./components/Dropdown";

type Props = {};

type Columns = {
  title: string | ReactNode;
  key: string;
  dataIndex: string;
  render?: (text: any, row: any) => ReactNode;
  align?: "left" | "center" | "right";
};

type User = {
  id: string;
  name: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: Date;
  role: string;
};

const page = (props: Props) => {
  const userList: User[] = [
    {
      id: "1211",
      name: "Celeste",
      imageUrl: "41541",
      isActive: true,
      createdAt: new Date("2023-10-24"),
      role: "管理員",
    },
  ];

  const columns: Array<Columns> = [
    {
      title: <input type="checkbox" className="checkbox checkbox-primary" />,
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (text: any, row: any) => (
        <input type="checkbox" className="checkbox checkbox-primary" />
      ),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "圖片",
      dataIndex: "imageUrl",
      align: "center",
      key: "imageUrl",
    },
    {
      title: "是否啟用",
      dataIndex: "isActive",
      align: "center",
      key: "isActive",
      render: (isActive: boolean, row: any) => (
        <input
          type="checkbox"
          checked={isActive}
          className="checkbox checkbox-primary"
        />
      ),
    },
    {
      title: "角色",
      dataIndex: "role",
      align: "center",
      key: "role",
    },
    {
      title: "功能",
      dataIndex: "operation",
      key: "operation",
      align: "center",
      render: (_, row) => <Dropdown data={row} />,
    },
  ];

  return (
    <div className="mt-5 rounded-lg border p-5 min-h-[600px] relative user-table">
      <div className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Stat mainNumber={8} desc="hotel" />
        <Stat mainNumber={8} desc="user" />
        <Stat mainNumber={8} desc="active" />
        <Stat mainNumber={8} desc="total" />
      </div>
      <div className="overflow-x-auto mt-7 mb-3 border rounded-xl ">
        <Table className="text-base" columns={columns} dataSource={userList} />
      </div>
    </div>
  );
};

export default page;
