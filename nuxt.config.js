
export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    url: 'http://localhost:3000/'
  },
  loading: { color: '#fff' },
  css: [
    './assets/variables.scss'
  ],
  plugins: [
    './plugins/vuelidate.js'
  ],
  buildModules: [],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: './assets/variables.scss'
  },
  axios: {
    baseURL: 'http://localhost:3333/'
  },
  build: {
    extend (config, ctx) {
    }
  },
  router: {
    middleware: ['auth']
  }
}
