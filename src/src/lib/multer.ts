import multer from "multer";
import { mkdirSync, existsSync } from "fs";
import { join } from "path";

const uploadDir = join(process.cwd(), "uploads"); // 절대 경로로 uploads 폴더 설정

// uploads 폴더가 없으면 생성
if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const uniqueFilename = `${timestamp}-${file.originalname}`;
    cb(null, uniqueFilename);
  },
});

export const upload = multer({ storage });
