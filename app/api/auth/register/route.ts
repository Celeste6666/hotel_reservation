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
      return NextResponse.json({
        code: 200,
        message: "新增成功",
        data: {
          id,
          name,
          email,
        },
      });
    }

    return NextResponse.json({
      code: 400,
      message: "新增成功",
      data: null,
    });
  } catch (err: any) {
    return NextResponse.json({
      code: 500,
      message: err.message, // 錯誤訊息在這裡
      data: null,
    });
  }
}
