<template>
  <v-toolbar
    dark
    :src="image"
  >
    <MenuItems :name="name" :items="items" />
  </v-toolbar>
</template>
<script>
import MenuItems from '@/components/Menu/menuItems'
export default {
  components: {
    MenuItems
  },
  props: {
    name: {
      type: String,
      default () {
        return {}
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    image: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>
