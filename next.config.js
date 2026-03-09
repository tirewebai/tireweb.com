/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the site to be exported as static HTML if needed
  // output: 'export',  // Uncomment for fully static export (disables API routes)

  // Trailing slash makes URLs work like the original Webflow site
  trailingSlash: false,
}

module.exports = nextConfig
