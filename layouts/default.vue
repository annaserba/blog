<template>
  <v-app color="white">
    <Menu />
    <v-container
      align-start
      fill-height
    >
      <nuxt />
    </v-container>
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
