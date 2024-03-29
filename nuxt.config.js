export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - lifelinks-frontend',
    title: 'lifelinks-frontend',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Overengineered social media platform',
      },
      {
        name: 'theme-color',
        content: '#121212',
      },
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next',
    // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env/
    '@nuxtjs/dotenv',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
  ],

  router: {
    middleware: ['auth'],
  },

  toast: {
    position: 'bottom-center',
    duration: 5000,
  },

  // Auth module configuration: https://auth.nuxtjs.org
  auth: {
    strategies: {
      identityServer: {
        scheme: '~/schemes/IdentityServerScheme',
        token: {
          property: 'token',
        },
        endpoints: {
          login: {
            url: process.env.BASE_URL + '/api/account/signin',
            method: 'post',
          },
          logout: {
            url: process.env.BASE_URL + '/api/account/signout',
            method: 'post',
          },
          token: {
            url: process.env.BASE_URL + '/connect/token',
            method: 'post',
          },
          user: {
            url: process.env.BASE_URL + '/connect/userinfo',
            method: 'post',
          },
        },
        redirect: {
          login: '/login',
          logout: '/',
          callback: '/login',
          home: '/explore',
        },
      },
      github: {
        clientId: '0edb7e3b253d264d61a6',
        clientSecret: '8b87c2c0a9bc73093858d9d91a2e8700845462ee',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Lifelinks',
      short_name: 'Lifelinks',
      lang: 'en',
      theme_color: '#121212',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#27b83e',
          secondary: '#FF8C42',
          accent: '#27b83e',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#F7F7FF',
        },
        dark: {
          primary: '#27b83e',
          secondary: '#FF8C42',
          accent: '#27b83e',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
