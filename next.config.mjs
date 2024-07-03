/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/Arcade-Time',
    assetPrefix: '/Arcade-Time/',
    images: {
      loader: 'imgix',
      path: '',
    },
    trailingSlash: true, // Ensures trailing slashes are added to all routes
  };

export default nextConfig;
