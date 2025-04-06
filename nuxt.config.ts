// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css:['~/assets/app.css'],
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    '@nuxtjs/i18n'
  ],
  i18n:{
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'EN', language:'en-US', file: 'en.json' },
      { code: 'fr', name: 'FR', language:'fr-FR', file: 'fr.json' }
    ],
    baseUrl:'https://marketmindapp.netlify.app'

  }
})