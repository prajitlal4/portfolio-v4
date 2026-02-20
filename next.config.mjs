/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services/websites-for-plumbers', destination: '/websites-for-tradies', permanent: false },
      { source: '/services/websites-for-electricians', destination: '/websites-for-tradies', permanent: false },
      { source: '/services/websites-for-landscapers', destination: '/websites-for-tradies', permanent: false },
      { source: '/services/websites-for-renovators', destination: '/websites-for-tradies', permanent: false },
      { source: '/case-studies/scope-bathrooms', destination: '/case-studies', permanent: false },
      { source: '/case-studies/highside-plumbing', destination: '/case-studies', permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'portfolio1.syd1.cdn.digitaloceanspaces.com'
      }
    ],
  },
};

export default nextConfig;
