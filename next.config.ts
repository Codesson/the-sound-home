import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  exportPathMap: async function (defaultPathMap) {
    const pathMap = { ...defaultPathMap };
    delete pathMap["/api/file"]; // API 라우트를 제거
    return pathMap;
  },
};

export default nextConfig;
