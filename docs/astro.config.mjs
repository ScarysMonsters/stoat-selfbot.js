import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  outDir: './dist',
  publicDir: '../static',
  srcDir: '.',
  site: 'https://scarysmonsters.github.io',
  base: '/stoat-selfbot.js',
  integrations: [
    starlight({
      title: 'stoat-selfbot.js',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Français', lang: 'fr' },
        en: { label: 'English', lang: 'en' }
      },
      sidebar: [
        {
          label: 'Guide',
          items: [
            { label: 'Introduction', link: '/guides/intro' },
            { label: 'Installation', link: '/guides/installation' },
            { label: 'Getting Started', link: '/guides/getting-started' }
          ]
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'api' }
        }
      ],
      customCss: [],
      social: [
        { icon: 'github', href: 'https://github.com/ScarysMonsters/stoat-selfbot.js', label: 'GitHub' }
      ],
      editLink: {
        baseUrl: 'https://github.com/ScarysMonsters/stoat-selfbot.js/edit/master/'
      }
    })
  ]
});
