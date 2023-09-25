import { NextResponse, type NextRequest } from "next/server";
import { query } from "@LIB/db";
import { NextApiResponse } from "next";

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

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token");
  return NextResponse.json({ code: 200, token });
}

export async function POST(request: UserRequest) {
  const { name, email, hashed_password } = await request.json();
  const id = crypto.randomUUID();
  console.log("request", name, email, hashed_password);

  try {
    const res: ResponseData = await query(
      `INSERT INTO users (id, name, email, hashed_password )
      VALUES (?, ?, ?, ?)`,
      [id, name, email, hashed_password]
    );

    if (res.affectedRows > 0) {
      return NextResponse.json(
        {
          code: 200,
          isSuccess: true,
          message: "新增成功",
          data: {
            id,
            name,
            email,
          },
        },
        { status: 200, statusText: "OK" }
      );
    }

    return NextResponse.json(
      {
        code: 400,
        isSuccess: false,
        message: "新增失敗",
        data: null,
      },
      { status: 400, statusText: "FAIL" }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        code: 500,
        isSuccess: false,
        message: err.message, // 錯誤訊息在這裡
        data: null,
      },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
