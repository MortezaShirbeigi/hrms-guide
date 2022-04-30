// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "نرم‌افزار تحت وب یاقوت",
  tagline: "محاسبه حقوق و دستمزد",
  url: "https://mortezashirbeigi.github.io",
  baseUrl: "/hrms-guide/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MortezaShirbeigi", // Usually your GitHub org/user name.
  projectName: "hrms-guide", // Usually your repo name.

  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
    localeConfigs: {
      fa: {
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "نرم‌افزار تحت وب یاقوت",
        logo: {
          alt: "نرم‌افزار تحت وب یاقوت",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "راهنمای جامع",
          },
          { to: "/blog", label: "وبلاگ", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "آموزش‌ها",
            items: [
              {
                label: "آموزش کار با اپلیکیشن",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "شبکه های اجتماعی",
            items: [
              {
                label: "تلگرام",
                href: "https://google.com",
              },
              {
                label: "اینستاگرام",
                href: "https://google.com",
              },
              {
                label: "توییتر",
                href: "https://google.com",
              },
            ],
          },
          {
            title: "جدیدترین مقالات",
            items: [
              {
                label: "وبلاگ",
                to: "/blog",
              },
              {
                label: "دانلود اپلیکیشن",
                href: "https://google.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Karafarid.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
