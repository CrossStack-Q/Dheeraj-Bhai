/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
        },
      ],
    },
    env: {
        GOOGLE_CLIENT_ID: '502763627878-odnjo5pg22p9suppad3g4n26baq2qr4f.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
      NEXTAUTH_SECRET: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
    },
  };
  
  module.exports = nextConfig;