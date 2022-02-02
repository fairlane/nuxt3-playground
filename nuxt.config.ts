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
      // Does not work???
      vue: {
        config: {
          productionTip: false,
          devtools: true
        }
      },
      dev: true,
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
        transpile: ['amazon-cognito-identity-js']
      },
      publicRuntimeConfig: {
        API_URL:  process.env.API_URL || "http://localhost:3000/api",
        AWS: {
          COGNITO_CLIENT_ID:  process.env.AWS_COGNITO_CLIENT_ID,
          COGNITO_POOL_ID:  process.env.AWS_COGNITO_POOL_ID
        },
      },         
      privateRuntimeConfig: {
      }
})
