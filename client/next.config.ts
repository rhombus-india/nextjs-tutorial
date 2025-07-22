/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "fluffy-space-waddle-x5pgjv6wvg5c6j6g-3000.app.github.dev", // Replace with your actual Codespace URL
      ],
    },
  },
};

module.exports = nextConfig;