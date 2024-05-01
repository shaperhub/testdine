/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    domains: ["images.pexels.com", "masterfed.com", "images.unsplash.com"],

    //Delete these 2 loader lines and the loader.js file if you want to deploy on a Node server like Vercel
    // loader: "custom",
    // loaderFile: "./loader.js",
  },
  // output: 'export',
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "images.pexels.com",
  //   },
  // ],

  trailingSlash: true,
};

module.exports = nextConfig;
