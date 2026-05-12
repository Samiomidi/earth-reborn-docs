import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "EARTH REBORN",
  tagline: "Persistent MMO Civilization System",

  url: "https://earth-reborn-docs.vercel.app",
  baseUrl: "/",

  favicon: "img/favicon.ico",

  organizationName: "Samiomidi",
  projectName: "earth-reborn-docs",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

export default config;
