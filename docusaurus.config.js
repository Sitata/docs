// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sitata Docs',
  tagline: 'APIs and widgets for COVID-19 travel requirements, pre-travel info, embedded insurance, and travel assistance',
  url: 'https://docs.sitata.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Sitata', // Usually your GitHub org/user name.
  projectName: 'Sitata Docs', // Usually your repo name.
  plugins: [
    // for google analytics
    // '@docusaurus/plugin-google-gtag',
    // [
    //   '@docusaurus/plugin-sitemap',
    //   {
    //     changefreq: 'weekly',
    //     priority: 0.5
    //   },
    // ],
  ],
  presets: [
    [
      'redocusaurus',
      {
        specs: [{
          spec: 'openapi.yaml',
          // specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
          routePath: '/api/',
        }],
        theme: {
          primaryColor: '#d69d43'
          // redocOptions: { hideDownloadButton: false },
        },
      }
    ],
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Sitata/docs/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sitata Docs',
        logo: {
          alt: 'Sitata',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'guides/intro',
            position: 'left',
            label: 'Guides',
          },
          {to: '/api', label: 'API', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'api/api',
          //   position: 'left',
          //   label: 'API',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.sitata.com',
            label: 'Sitata',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start Here',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Status',
                href: 'https://www.sitata-status.com',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/sitata.goanywhere',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.sitata.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sitata/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sitata, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      gtag: {
        // You can also use your "G-" Measurement ID here.
        trackingID: 'G-X38F53JSG1',
        // Optional fields.
        anonymizeIP: false, // Should IPs be anonymized?
      }
    }),
};

module.exports = config;
