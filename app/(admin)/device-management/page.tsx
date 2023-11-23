"use client";
import { ReactNode } from "react";
import Table from "@COM/(admin)/utils/Table";

type DeviceColumn = {
  title: string | ReactNode;
  dataIndex: string;
  key: string;
  render?: (text: any, row: any) => ReactNode;
  align?: "left" | "center" | "right";
};

type Device = {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  deleted: boolean;
  hotel_name: string;
};

const page = () => {
  return (
    <div className="mt-5 rounded-lg border p-5 min-h-[600px] relative device-table">
      <Table columns={[]} dataSource={[]} className="text-base" />
    </div>
  );
};

export default page;
