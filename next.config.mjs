/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ["prismcloudhosting.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prismcloudhosting.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
