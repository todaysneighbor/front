/* @type {import('next').NextConfig} */
const nextConfig = {
  // 외부 이미지 불러오기
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `media.bunjang.co.kr`,
      },
    ],
  },
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...nextConfig
}
