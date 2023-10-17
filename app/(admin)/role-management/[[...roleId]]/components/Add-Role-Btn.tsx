import { twMerge } from "tailwind-merge";

const AddRoleBtn = ({ className }: { className: string }) => {
  return (
    <button className={twMerge("btn btn-warning btn-sm text-white", className)}>
      新增角色
    </button>
  );
};

export default AddRoleBtn;
