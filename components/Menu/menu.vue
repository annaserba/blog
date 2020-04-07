<template>
  <v-toolbar
    dark
    src="./img/back.png"
  >
    <MenuItems />
  </v-toolbar>
</template>
<script>
import MenuItems from '@/components/Menu/menuItems'
export default {
  components: {
    MenuItems
  }
}
</script>
