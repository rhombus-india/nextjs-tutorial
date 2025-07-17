import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverActions: {
    // edit: updated to new key. Was previously `allowedForwardedHosts`
    allowedOrigins: ['https://literate-parakeet-jjj7w9p94q4x35j5v-3000.app.github.dev'],
  },
};

export default nextConfig;
