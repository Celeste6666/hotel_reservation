import Link from "next/link";
import { SubmitButton } from "./components/submit-button";
import getHashedPwd from "@LIB/getHashedPwd";
import { redirect } from "next/navigation";
import CardWithBg from "@COM/(fe)/utils/card-with-bg";

const Register = () => {
  const create = async (formData: FormData) => {
    "use server";

    const res = await fetch(`${process.env.MY_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        hashed_password: getHashedPwd(formData.get("pwd") as string),
      }),
    });
    const result = await res.json();
    if (result.isSuccess) {
      redirect("/login");
    }
    // mutate data
    // revalidate cache
  };
  return (
    <CardWithBg>
      <h3 className="mb-3">創建帳號</h3>
      <span>免費註冊中</span>
      <div className="divider">輸入帳號密碼註冊</div>
      <form action={create} className="w-full flex flex-col items-center">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">稱呼</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="name"
            className="input input-bordered w-full rounded-full bg-transparent"
          />
          <label className="label">
            <span className="label-text-alt">警告標語</span>
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">帳號</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="email"
            className="input input-bordered w-full rounded-full bg-transparent"
          />
          <label className="label">
            <span className="label-text-alt">警告標語</span>
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-danger">密碼</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="pwd"
            className="input input-bordered w-full rounded-full bg-transparent"
          />
          <label className="label">
            <span className="label-text-alt text-danger">警告標語</span>
          </label>
        </div>
        <SubmitButton />

        <span className="mt-5">
          已經註冊過了？
          <Link href="/login" className="text-amber-600 hover:text-amber-700">
            登入
          </Link>
        </span>
      </form>
    </CardWithBg>
  );
};

export default Register;
