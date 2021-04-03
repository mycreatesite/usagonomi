import Fiber from "fibers"
import Sass from "sass"

const sass = {
  implementation: Sass,
  sassOptions: {
    fiber: Fiber,
  },
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'USAGONOMI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',name: 'description',content: 'うさぎの好きなものを集めました'},
      { hid: 'twitter:card',name: 'twitter:card',content: 'summary_large_image'},
      { hid: 'og:site_name', property: 'og:site_name', content: 'USAGONOMI' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://usagonomi.web.app/' },
      { hid: 'og:title', property: 'og:title', content: 'USAGONOMI' },
      { hid: 'og:description', property: 'og:description', content: 'うさぎの好きなものを集めました' },
      { hid: 'og:image', property: 'og:image', content: 'https://usagonomi.web.app/ogp.png' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase',
    "~/plugins/vue-loaders",
    { src: '~/plugins/localStorage.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass
    }
  },
  // Routing configuration
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
