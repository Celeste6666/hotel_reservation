import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="p-8 flex flex-col items-center justify-between hover:bg-zinc-50 hover:rounded-2xl hover:shadow-lg">
      <h3 className="mt-6 mb-3">創建帳號</h3>
      <span>免費註冊中</span>
      <div className="divider">或樹入帳號密碼註冊</div>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">帳號</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">密碼</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default page;
