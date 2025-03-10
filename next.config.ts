import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here  https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/ron_weasley.png*/

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
