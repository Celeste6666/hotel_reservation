"use client";
import { ReactNode, useState, MouseEvent } from "react";
import Table from "@COM/(admin)/utils/Table";
import Dropdown from "./Dropdown";

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
  deleted: boolean;
};

const UserTable = () => {
  const userList: Array<User & { key: string }> = [
    {
      key: "1211",
      id: "1211",
      name: "Celeste",
      imageUrl: "41541",
      isActive: true,
      createdAt: new Date("2023-10-24"),
      role: "管理員",
      deleted: false,
    },
  ];

  const columns: Array<Columns> = [
    {
      title: <input type="checkbox" className="checkbox checkbox-primary" />,
      dataIndex: "deleted",
      key: "deleted",
      align: "center",
      render: (_, row: any) => (
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
  const [deletedRowList, setDeletedRowList] = useState<string[]>([]);
  const clickTableRow = (
    e: MouseEvent<HTMLElement>,
    data: User & { key: string }
  ) => {
    // TODO: row被點選後，第一個 checkbox也需憶起打勾
    if (deletedRowList.findIndex((key) => key === data.key) < 0) {
      setDeletedRowList([...deletedRowList, data.key]);
    } else {
      setDeletedRowList(deletedRowList.filter((key) => key !== data.key));
    }
  };
  return (
    <>
      <div className="w-full flex justify-end items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs my-10"
        />
      </div>
      <div className="overflow-x-auto border rounded-xl ">
        <Table
          className="text-base"
          columns={columns}
          dataSource={userList}
          onRow={clickTableRow}
          deletedRowList={deletedRowList}
        />
      </div>
    </>
  );
};

export default UserTable;
