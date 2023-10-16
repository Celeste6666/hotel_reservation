import DeleteBtn from "@COM/(admin)/utils/DeleteBtn";
import { TrashIcon } from "@heroicons/react/24/outline";

const RoleCard = () => {
  return (
    <div className="card-group">
      <div className="card rounded-lg w-full bg-primary-light text-primary-content">
        <div className="card-body px-4 py-2">
          <p className="card-title flex justify-between">
            <span>管理員</span>
            <span className="text-xs font-light">2023-10-15 16:40</span>
          </p>
          <span className="text-base flex justify-between">
            <span className="text-lg">創建人： Celeste</span>
            <div className="card-actions justify-end">
              <DeleteBtn className="btn btn-ghost btn-sm">
                <TrashIcon className="w-5 h-5" />
              </DeleteBtn>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
