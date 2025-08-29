/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.diuferroadv.com.br",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/api/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/areas-atuacao"),
    await config.transform(config, "/sobre"),
    await config.transform(config, "/contato"),
    await config.transform(config, "/artigos"),
  ],
};
