import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BasicTable<T> = {
  key: string; // unique key
  [props: string]: any;
};

type BasicTableColumns<T> = {
  title: string | ReactNode;
  dataIndex: keyof T;
  align?: "left" | "center" | "right";
  render?: (text: any, row: T) => ReactNode;
} & BasicTable<T>;

type Props<T extends BasicTable<T>> = {
  columns: Array<BasicTableColumns<T>>;
  dataSource: Array<T>;
  className: string;
};

export default function Table<T extends BasicTable<T>>({
  columns,
  dataSource,
  className,
}: Props<T>) {
  return (
    <table className={twMerge("table", className)}>
      {/* head */}
      <thead>
        {columns.map((column, index) => (
          <th key={column.key} className="text-base border-b">
            <span
              className={twMerge(
                column.align ? `flex justify-${column.align}` : ""
              )}
            >
              {column.title}
            </span>
          </th>
        ))}
      </thead>
      <tbody>
        {dataSource.map((data, index) => (
          <TableRow key={data.key} data={data} columns={columns} />
        ))}
      </tbody>
    </table>
  );
}

function TableRow<T extends BasicTable<T>>({
  data,
  columns,
}: {
  data: T;
  columns: BasicTableColumns<T>[];
}) {
  let components: Array<ReactNode> = [];
  const getTableCell = (data: T) => {
    columns.forEach((column) => {
      if (column.render) {
        components.push(
          <TableCell
            value={column.render(data[column.dataIndex], data)}
            align={column.align}
          />
        );
      } else {
        components.push(
          <TableCell value={data[column.dataIndex]} align={column.align} />
        );
      }
    });
  };
  getTableCell(data);
  return (
    <tr className="border-b last:border-0">
      {components.map((component) => component)}
    </tr>
  );
}

function TableCell({
  value,
  align,
}: {
  value: any;
  align: "left" | "center" | "right" | undefined;
}) {
  return (
    <td>
      <span className={twMerge(align ? `flex justify-${align}` : "")}>
        {value}
      </span>
    </td>
  );
}
