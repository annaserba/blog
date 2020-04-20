<template>
  <v-app color="white">
    <Menu />
    <v-container
      align-start
      fill-height
    >
      <nuxt />
    </v-container>
    <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8" />
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
