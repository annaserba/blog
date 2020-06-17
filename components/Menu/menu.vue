<template>
  <div>
    <div v-if="!image" class="header">
      <v-row align="start" justify="start" class="d-flex d-sm-none">
        <v-col>
          <v-app-bar-nav-icon color="white" class=" float-right" @click="drawer = true" />
        </v-col>
      </v-row>
      <MenuItems :name="name" :items="items" />
    </div>
    <v-app-bar
      v-if="image"
      dark
      :src="image"
    >
      <MenuItems :name="name" :items="items" />
      <v-app-bar-nav-icon color="white" class="d-flex d-sm-none float-right" @click="drawer = true" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      clipped-right
    >
      <NavigationDrawer :name="name" :items="items" />
    </v-navigation-drawer>
  </div>
</template>
<style scope>
.header{
  position: absolute;
  z-index: 3;
  width: 100%;
  padding: 0 16px;
}
</style>
<script>
import MenuItems from '@/components/Menu/menuItems'
import NavigationDrawer from '@/components/Menu/navigationDrawer'
export default {
  components: {
    MenuItems,
    NavigationDrawer
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
  },
  data: () => ({
    drawer: false
  })
}
</script>
