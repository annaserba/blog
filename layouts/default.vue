<template>
  <v-app color="white">
    <nuxt />
    <v-footer
      :fixed="fixed"
      app
    >
      <span>{{ $t('my_name') }} &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false
      // title: 'Vuetify.js'
    }
  }
}
</script>
