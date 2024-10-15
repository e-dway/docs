import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'e-dway',
  tagline: '',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'e-dway', // Usually your GitHub org/user name.
  projectName: 'e-dway', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
   
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'E-dway',
      logo: {
        alt: 'E-dway',
        src: 'img/logo-edway.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'Api',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dbSidebar',
          position: 'left',
          label: 'Database',
        },
        {
          type: 'docSidebar',
          sidebarId: 'boSidebar',
          position: 'left',
          label: 'Backoffice',
        },
        {to: '/blog', label: 'Blog', position: 'right'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Api',
              to: 'docs/api/intro',
            },
            {
              label: 'Database',
              to: 'docs/db/intro',
            },
            {
              label: 'Backoffice',
              to: 'docs/backoffice/intro',
            }
          ],
        },
        {
          title: 'Siti',
          items: [
            {
              label: 'E-dway',
              href: 'https://www.e-dway.com/',
            },{
              label: 'FAQ',
              href: 'https://faq.e-dway.com/',
            }
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/e-dway',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Edway, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
