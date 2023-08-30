/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d3i4yxtzktqr9n.cloudfront.net'], // Ajoutez ici le nom d'hôte de votre image
  },
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/styles': {
      transform: '@mui/styles/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
}

module.exports = nextConfig
