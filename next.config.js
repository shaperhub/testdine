/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "masterfed.com", "images.unsplash.com", "firebasestorage.googleapis.com", "lh3.googleusercontent.com"],

    //Delete these 2 loader lines and the loader.js file if you want to deploy on a Node server like Vercel
    // loader: "custom",
    // loaderFile: "./loader.js",
  },
  
  // The output export line is for building a folder for static hosting
  // output: 'export',

  trailingSlash: true,
};

module.exports = nextConfig;
