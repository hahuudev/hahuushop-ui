/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["salt.tikicdn.com", "cf.shopee.vn", "res.cloudinary.com"],
    },
};

module.exports = nextConfig;
