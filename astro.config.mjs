import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'stoat-selfbot.js',
      defaultLocale: 'fr',
      locales: {
        fr: { label: 'Français' },
        en: { label: 'English' }
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
      customCss: [
        './src/styles/custom.css'
      ],
      social: {
        github: 'https://github.com/ScarysMonsters/stoat-selfbot.js'
      },
      editLink: {
        baseUrl: 'https://github.com/ScarysMonsters/stoat-selfbot.js/edit/main/'
      }
    })
  ]
});
