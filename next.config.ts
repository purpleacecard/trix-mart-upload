import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["trixmartbucket.s3.eu-west-1.amazonaws.com"], // Allow images from S3
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
    },
};

export default nextConfig;