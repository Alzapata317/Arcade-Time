/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
      loader: 'imgix',
      path: '',
    },
    trailingSlash: true,
  };
  
  export default nextConfig;
