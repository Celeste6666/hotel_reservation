import { NextResponse, type NextRequest } from "next/server";
import { query } from "@LIB/db";
import { compare } from "bcryptjs";

type ResponseData = {
  [prop: string]: any;
};

type UserRequest = {
  json: () => {
    email: string;
    pwd: string;
  };
};

export async function POST(request: UserRequest) {
  const { email, pwd } = await request.json();

  if (!email || !pwd) {
    return NextResponse.json(
      {
        code: 404,
        ok: false,
        message: "未完整填寫帳號或密碼",
        data: null,
      },
      { status: 404, statusText: "FAIL" }
    );
  }

  try {
    const user: ResponseData = await query(
      `select id, name, email, hashed_password from users where email=?`,
      [email]
    );

    if (user.length > 0) {
      // 用了 bcrypt 密碼不能用純字串在資料庫比對，因為每一次 bcrypt 在 hash 字串產生的值都不同，一定要用它提供的 compare
      const match = await compare(pwd, user[0].hashed_password);
      if (match) {
        return NextResponse.json(
          {
            code: 200,
            ok: true,
            message: "成功",
            data: user,
          },
          { status: 200, statusText: "OK" }
        );
      } else {
        return NextResponse.json(
          {
            code: 401,
            ok: false,
            message: "帳號或密碼填寫錯誤",
            data: null,
          },
          { status: 404, statusText: "FAIL" }
        );
      }
    }

    return NextResponse.json(
      {
        code: 404,
        ok: false,
        message: "無此用戶",
        data: null,
      },
      { status: 404, statusText: "FAIL" }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        code: 500,
        ok: false,
        message: err.message, // 錯誤訊息在這裡
        data: null,
      },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
