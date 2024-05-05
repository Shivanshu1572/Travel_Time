/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the output: 'export' configuration
  // output: 'export',

  // OR

  // Disable Image Optimization API
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;