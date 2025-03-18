import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { message: "This is a GET request" },
    { status: 200 }
  );
}

// POST 요청 처리
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const id = formData.get("id");
    const pw = formData.get("pw");
    return NextResponse.json(
      { message: "POST received", data: { id, pw } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
