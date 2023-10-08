import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { query } from "@LIB/db";

interface User {
  id: string;
    name: string;
    email: string;
}

export const options: NextAuthOptions = {
  pages: {
    signIn: "/api/auth/signin/credentials",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email"},
        pwd: { label: "password", type: "password"}
      },
      async authorize(credentials) {
        const { email, pwd } = credentials as {
          email: string;
          pwd: string;
        };
        if (!email || !pwd) {
          throw new Error("Invalid credentials")
        };
        // 從資料庫獲取使用者資料去做驗證
        const res = await fetch(`${process.env.MY_URL}/api/auth/sign-in`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            pwd,
          }),
        });

        const result = await res.json(); // 因為用 fetch，所以一定要用 json 方法轉換

        if (!result.ok) {
          console.error("登录失败：", result.message); // 输出错误消息以进行调试
          throw new Error(`Invalid credentials${result.message}`)
        }

        const user = result.data as User;
        return user; // 一定要 return 一個包含 id: string 的物件
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
