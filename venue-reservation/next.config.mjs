/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',  // For Google profile images
      'googleusercontent.com',      // Alternative Google domain
      'storage.googleapis.com', // For Google Cloud Storage
    ],
  },
}

export default nextConfig;
