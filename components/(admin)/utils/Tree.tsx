import { ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps<T> {
  treeData: T[];
  className?: string;
}

interface TreeNode<T> {
  children?: ReactNode;
  className?: string;
  data: T & Data;
}

type Data = {
  id: string;
  title: string;
  children?: Data[];
};

interface TreeChild<U> {
  className?: string;
  data: U & Data;
}

function TreeChild<U>({ data, className }: TreeChild<U>): ReactNode {
  return (
    <div className="form-control" key={data.id}>
      <label className="cursor-pointer label justify-start">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
        />
        <span className="label-text ms-3">{data.title}</span>
      </label>
    </div>
  );
}

function TreeNode<T>({ data, children, className }: TreeNode<T>): ReactNode {
  return (
    <div
      className={twMerge(
        "collapse-content px-8 py-1",
        data.children?.length ? "collapse collapse-open" : "",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Tree<T extends Data>({
  treeData = [],
}: IProps<T>): ReactNode {

  const renderChildren = (data: T | Data, index: number) => {
    return <div className="">
    <TreeChild key={index} data={data} />
    <TreeNode key={index} data={data}>
      {data.children?.map(renderChildren)}
    </TreeNode>
  </div>;
  };

  return (
    <div className={twMerge("collapse collapse-open grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-5 py-0 p-4 collapse-role")}>
      {treeData.map(renderChildren)}
    </div>
  );
}
