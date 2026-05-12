import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

const config: Config = {
  title: "EARTH REBORN",
  tagline: "Persistent MMO Civilization System",

  favicon: "img/favicon.ico",

  url: "https://earth-reborn-docs.vercel.app",
  baseUrl: "/",

  organizationName: "Samiomidi",
  projectName: "earth-reborn-docs",

  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    {
      href: "/css/fonts.css",
      rel: "stylesheet",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          lastVersion: undefined,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          sidebarPath: require.resolve("./sidebars.ts"),
          routeBasePath: "/docs",
        },

        blog: false,

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",

    metadata: [
      {
        name: "keywords",
        content: "MMO, Civilization, Blockchain, Game Economy, Documentation",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "EARTH REBORN",

      hideOnScroll: true,

      logo: {
        alt: "EARTH REBORN",
        src: "img/logo.svg",
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Documentation",
        },

        {
          to: "/docs/introduction/welcome",
          label: "Getting Started",
          position: "left",
        },

        {
          href: "https://github.com/Samiomidi/earth-reborn-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",

      links: [
        {
          title: "Documentation",

          items: [
            {
              label: "Introduction",
              to: "/docs/introduction/welcome",
            },

            {
              label: "Architecture",
              to: "/docs/architecture/system",
            },
          ],
        },

        {
          title: "Community",

          items: [
            {
              label: "GitHub",
              href: "https://github.com/Samiomidi/earth-reborn-docs",
            },
          ],
        },

        {
          title: "More",

          items: [
            {
              label: "Roadmap",
              to: "/docs/roadmap",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} EARTH REBORN`,
    },

    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,

      additionalLanguages: ["bash", "json", "typescript", "javascript"],
    },
  },
};

export default config;
