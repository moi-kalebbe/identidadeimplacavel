/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.luburger.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

