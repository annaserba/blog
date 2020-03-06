import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Anna Serba - ' + process.env.npm_package_name,
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
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '49279987',
        webvisor: true
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ],
    [
      'nuxt-i18n',
      {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              my_name: 'Anna Serba',
              subheading: '.Net Programmer and entrepreneur',
              aboutMeHead: 'About me',
              aboutMe: `I am a business automation web engineer.
              The area of my expertise covers the full stack .Net technologies.
              But I specialize in front-end technologies.
              I have extensive experience in fixing software bugs.
              I work only remotely`,
              basicSkilsHead: 'Basic skils',
              contactsHead: 'Contacts',
              resume: 'Resume'
            },
            ru: {
              my_name: 'Анна Серба',
              subheading: '.Net программист и предприниматель',
              aboutMeHead: 'Обо мне',
              aboutMe: `Я веб-инженер автоматизации бизнеса.
              Область моей компетенции охватывает полный стек технологий .Net.
              Но я специализируюсь на front-end технологиях.
              У меня большой опыт исправления ошибок в программном обеспечении.
              Я работаю только удаленно`,
              basicSkilsHead: 'Базовые навыки',
              contactsHead: 'Котакты',
              resume: 'Резюме'
            }
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
