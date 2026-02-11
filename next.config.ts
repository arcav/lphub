import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ['framer-motion', 'gsap', 'lucide-react'],
};

export default nextConfig;
