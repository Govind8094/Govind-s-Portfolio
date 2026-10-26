/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { optimizePackageImports: ["gsap", "three"] },
  async redirects() {
    return ["about", "education", "projects", "contact"].map((p) => ({ source: `/${p}`, destination: `/#${p}`, permanent: false }));
  },
};
export default nextConfig;
