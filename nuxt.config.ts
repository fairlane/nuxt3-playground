import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    head: {
        title: 'Nuxt playground',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      },
    
      // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
      plugins: [
      ],
    
      // Auto import components: https://go.nuxtjs.dev/config-components
      components: true,

      css: ['~/assets/css/tailwind.css'],
      build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },
      publicRuntimeConfig: {
        API_URL:  process.env.API_URL || "http://localhost:3001"
      },         
})
