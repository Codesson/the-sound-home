import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";
import { readdir } from "node:fs/promises";

// 파일 업로드 API 핸들러
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`./uploads/${file.name}`, buffer);

    revalidatePath("/");

    return NextResponse.json({
      status: "success",
      message: "파일 업로드 성공",
    });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json({ error: "File upload failed." }, { status: 500 });
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const files = await readdir("./uploads");

    console.log("file list: ", files);
    return NextResponse.json({ status: "success", files: files });
  } catch (error) {
    return NextResponse.json({ error: "Data Error" }, { status: 500 });
  }
}

// Next.js API 설정
export const config = {
  api: {
    bodyParser: false, // Next.js 기본 BodyParser 비활성화
  },
};

export const dynamic = "force-dynamic"; // 동적 처리 허용
