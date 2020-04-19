<template>
  <v-app color="white">
    <Menu />
    <v-container
      align-start
      fill-height
    >
      <nuxt />
    </v-container>
    <v-footer
      fixed
      app
    >
      <span>{{ $t('my_name') }} &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import Menu from '@/components/Menu/menu'
export default {
  components: {
    Menu
  }
}
</script>
