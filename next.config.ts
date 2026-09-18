import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site, no runtime server (ADR 0001, ADR 0002).
  output: "export",
  // The default image loader needs a server; serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
