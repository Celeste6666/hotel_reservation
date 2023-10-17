import DeleteBtn from "@COM/(admin)/utils/DeleteBtn";
import { TrashIcon } from "@heroicons/react/24/outline";

const RoleCard = () => {
  return (
    <div className="flex justify-between items-center">
      <input
        type="checkbox"
        checked={true}
        className="checkbox rounded-full me-3"
      />
      <div className="card rounded-lg w-full h-full xl:bg-primary-light ">
        <div className="card-body px-4 py-2 ">
          <p className="card-title flex justify-between">
            <span>管理員</span>
            <span className="text-xs font-light hidden xl:inline">
              2023-10-15 16:40
            </span>
          </p>
          <span className="text-lg hidden xl:inline">創建人： Celeste</span>
        </div>
      </div>
      <DeleteBtn className="btn btn-ghost btn-sm">
        <TrashIcon className="w-7 h-7" />
      </DeleteBtn>
    </div>
  );
};

export default RoleCard;
