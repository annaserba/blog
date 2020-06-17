<template>
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
          :to="($i18n.defaultLocale!=$i18n.locale?'/'+$i18n.locale:'')+'/'+item.fields.slug"
        >
          {{ item.fields.name }}
        </v-btn>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>

export default {
  props: {
    name: {
      type: String,
      default () {
        return ''
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
