<template>
  <div>
    <v-app-bar
      absolute
      dark
      fade-img-on-scroll
      :src="image"
    >
      <v-spacer />
      <v-tabs
        style="width:auto"
        right
        class="pr-5"
      >
        <v-tab
          v-for="item in items"
          :key="item.sys.id"
          nuxt
          :to="($i18n.defaultLocale!=$i18n.locale?'/'+$i18n.locale:'')+'/'+(item.fields.slug?item.fields.slug:'')"
          :active="!$route.path.toLowerCase().endsWith('/'+item.fields.slug)
            || !$route.path.toLowerCase().endsWith('/'+$i18n.locale+'/'+item.fields.slug)"
          class="d-none d-sm-flex"
        >
          {{ item.fields.name }}
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="drawer = true" />
      <div class="float-right d-none d-sm-flex" style="width:64px">
        <LangSwitch />
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      clipped-right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="item in items"
            :key="item.sys.id"
            class="pa-0 ma-0"
          >
            <v-btn
              text
              nuxt
              block
              class="pa-0"
              :to="($i18n.defaultLocale!=$i18n.locale?'/'+$i18n.locale:'')+'/'+(item.fields.slug?item.fields.slug:'')"
            >
              {{ item.fields.name }}
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LangSwitch from '@/components/Menu/langSwitch'
export default {
  components: {
    LangSwitch
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
