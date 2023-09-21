import { Dispatch, SetStateAction } from "react";

const FilterBar = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-5 p-3 flex flex-col card rounded-lg bg-base-100 shadow-xl hover:scale-105 transition duration-300">rangeFilter</div>
      <div className="mt-5 p-3 flex flex-col card rounded-lg bg-base-100 shadow-xl hover:scale-105 transition duration-300">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span>南竿</span>
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span>南竿</span>
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span>南竿</span>
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>
      <div className="mt-5 p-3 flex flex-col card rounded-lg bg-base-100 shadow-xl hover:scale-105 transition duration-300">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span>單人房</span>
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span>雙人房</span>
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span>四人房</span>
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
