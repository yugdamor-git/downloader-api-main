/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    BASE_DOMAIN: "https://videos-phi-ten.vercel.app",
  },
};

module.exports = nextConfig;
