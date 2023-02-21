/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
