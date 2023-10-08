import { NextResponse, type NextRequest } from "next/server";
import { query } from "@LIB/db";

type ResponseData = {
  [prop: string]: any;
};

type UserRequest = {
  json: () => {
    name: string;
    email: string;
    hashed_password: string;
  };
};

export async function POST(request: UserRequest) {
  const { name, email, hashed_password } = await request.json();
  const id = crypto.randomUUID();

  try {
    const isEmailExist = await query(`SELECT email FROM users WHERE email=?`, [
      email,
    ]);
    if (isEmailExist) {
      return NextResponse.json(
        {
          code: 409,
          ok: false,
          message: "用戶已存在",
          data: null,
        },
        { status: 409, statusText: "FAIL" }
      );
    }

    const res: ResponseData = await query(
      `INSERT INTO users (id, name, email, hashed_password )
      VALUES (?, ?, ?, ?)`,
      [id, name, email, hashed_password]
    );

    if (res.affectedRows > 0) {
      return NextResponse.json(
        {
          code: 200,
          ok: true,
          message: "新增成功",
          data: {
            id,
            name,
            email,
          },
        },
        { status: 201, statusText: "OK" }
      );
    }

    return NextResponse.json(
      {
        code: 400,
        ok: false,
        message: "新增失敗",
        data: null,
      },
      { status: 400, statusText: "FAIL" }
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
