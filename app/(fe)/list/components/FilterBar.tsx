import { Dispatch, SetStateAction, CSSProperties } from "react";

const FilterBar = () => {
  return (
    <section className="flex flex-col">
      <div className="p-5 flex flex-col items-center card rounded-lg bg-base-100 shadow-xl hover:scale-105 transition duration-300">
        <div
          className="mt-4 range overflow-visible h-3 flex items-center rounded-none rounded-tl-2xl rounded-bl-2xl relative z-0 bg-zinc-200 w-full
          before:w-8 before:h-8 before:bg-primary before:absolute before:rounded-full before:left-[0%] before:-translate-x-1/2 before:z-10
          after:w-8 after:h-8 after:bg-primary after:absolute after:rounded-full after:right-[0%] after:translate-x-1/2 after:z-10"
        ></div>
        <div className="mt-5 w-full flex justify-between items-center lg:flex-col">
          <div className="form-control w-full max-w-xs me-5 sm:me-10 lg:me-0">
            <label className="label">
              <span className="label-text">最低價</span>
            </label>
            <input
              type="number"
              placeholder="請輸入"
              className="input input-bordered input-sm"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">最高價</span>
            </label>
            <input
              type="number"
              placeholder="請輸入"
              className="input input-bordered input-sm"
            />
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default FilterBar;
