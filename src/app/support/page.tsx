"use client";

import { useState, useEffect } from "react";

type FileRecord = {
  id: number;
  filename: string;
  filepath: string;
};

export default function Support() {
  const [file, setFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<FileRecord[]>([]); // 초기값을 빈 배열로 설정

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log("formData: ", formData.get("file"));

    const response = await fetch("/api/file", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    alert(result.message || "Upload failed");
    fetchFileList(); // 파일 업로드 후 목록 갱신
  };

  const fetchFileList = async () => {
    try {
      const response = await fetch("/api/file");
      console.log("----- file upload response", response);
      if (!response.ok) {
        throw new Error("Failed to fetch file list");
      }
      // const data: FileRecord[] = await response.json();
      // setFileList(data || []); // null 방지
    } catch (error) {
      console.log(error);
      setFileList([]); // 에러 발생 시 빈 배열로 설정
    }
  };

  useEffect(() => {
    fetchFileList();
  }, []);

  return (
    <div className="pt-20">
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <h2>Uploaded Files</h2>
      {fileList.length === 0 ? (
        <p>No files uploaded yet.</p>
      ) : (
        <ul>
          {fileList.map((file) => (
            <li key={file.id}>
              {file.filename} -{" "}
              <a href={file.filepath} download>
                Download
              </a>
              <span>{file.filepath}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
