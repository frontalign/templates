export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    'motion-v/nuxt',
  ],

  css: [
    'frontalign/css',
    '~/assets/css/globals.css',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Agency Starter Template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Award-winning design and development agency.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@400;600;700;800;900&display=swap' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/services',
        '/services/web-design',
        '/services/branding',
        '/services/development',
        '/services/marketing',
        '/portfolio',
        '/portfolio/apex-finance',
        '/portfolio/lumina-brand',
        '/portfolio/velocity-cloud',
        '/portfolio/kura-coffee',
        '/portfolio/stride-performance',
        '/portfolio/novus-ai',
      ],
    },
  },
})
