"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import SubmitButton from "@COM/(fe)/utils/submit-button";
import CardWithBg from "@COM/(fe)/utils/card-with-bg";
import getHashedPwd from "@/lib/getHashedPwd";
import { SyntheticEvent } from "react";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();

  const login = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      pwd: { value: string };
    };
    const email = target.email.value; // typechecks!
    const pwd = target.pwd.value; // typechecks!
    const result = await signIn("credentials", {
      email,
      pwd,
      redirect: false,
    });
    if (result?.error) {
      // 处理登录失败，显示错误消息或执行其他操作
      console.error("登录失败：", result.error);
    } else if (result?.ok) {
      // 处理登录成功，显示成功消息或重定向到其他页面
      console.log("登录成功");
      // 在这里可以进行重定向或其他操作
      router.replace("/dashboard");
    }
  };
  return (
    <CardWithBg>
      <h3 className="mb-3">登入</h3>
      <div className="divider">輸入帳號密碼註冊</div>
      <form onSubmit={login} className="w-full flex flex-col items-center">
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
        <SubmitButton text="登入" />

        <span className="mt-5">
          沒有帳號？
          <Link
            href="/register"
            className="text-amber-600 hover:text-amber-700"
          >
            註冊
          </Link>
        </span>
      </form>
    </CardWithBg>
  );
};

export default Login;
