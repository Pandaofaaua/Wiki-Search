/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://wikisearchbyloseyi.vercel.app",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
};
