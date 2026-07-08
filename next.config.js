/** @type {import('next').NextConfig} */
const nextConfig = {
    
  serverExternalPackages: ["@prisma/client", "pg"],
  images: {
    formats: ['image/avif', 'image/webp']
  },
      devIndicators: false

};




export default nextConfig;