/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    formats: ["image/avif", "image/webp"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    loader: "default",
    qualities: [50, 75, 85, 90],
    minimumCacheTTL: 60,
  },
    headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

export default nextConfig;
