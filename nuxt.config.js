export default {
  head: {
    title: 'Playground',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oswald&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.lineicons.com/3.0/lineicons.css'
      }
    ],
    script: [
      { src: 'https://js.stripe.com/v3' },
    ],
  },
  css: ["~/assets/scss/base.scss"],
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    API_BASE_URL: process.env.API_BASE_URL,
    BASE_URL: process.env.BASE_URL,
  },
  modules: [
    'nuxt-basic-auth-module'
  ],
  serverMiddleware: [
    '~/server-middleware/payment.js'
  ],
  basic: {
    name: 'playground',
    pass: 'preview2022',
    enabled: false
  },
  server: {
    // host: '0' // default: localhost
  }
}
