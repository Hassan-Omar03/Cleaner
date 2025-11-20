/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",            // ✅ REQUIRED
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,         // good
  },
};

export default nextConfig;
