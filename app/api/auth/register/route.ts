import { NextResponse, type NextRequest } from "next/server";
import { query } from "@LIB/db";

type ResponseData = {
  message: string;
};

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token");
  return NextResponse.json({ code: 200, token });
}

export async function POST(request: Request) {
  const { name, email, hashed_password } = await request.json();

  try {
    const res = await query(
      `INSERT INTO users (id, name, hashed_password, email)
      VALUES (UUID(), ?, ?, ?)`,
      [name, email, hashed_password]
    );

    return {
      code: 200,
      message: "成功",
      data: {},
    };
  } catch (err: any) {
    return {
      code: 500,
      message: err.message, // 錯誤訊息在這裡
      data: null,
    };
  }
}
