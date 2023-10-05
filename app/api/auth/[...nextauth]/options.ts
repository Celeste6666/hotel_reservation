import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { query } from "@LIB/db";

interface User {
  ok: boolean;
  code: number;
  message: string;
  data: {
    id?: string;
    name?: string;
    email?: string;
  } | null;
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
      async authorize(credentials, req) {
        const { email, pwd } = credentials as {
          email: string;
          pwd: string;
        };
        if (!email || !pwd) return null;
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

        const user = (await res.json()) as User; // 因為用 fetch，所以一定要用 json 方法轉換

        if (!user.ok) {
          console.error("登录失败：", user.message); // 输出错误消息以进行调试
          return null;
        }
        return user;
      },
      credentials: {},
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};
