<template>
  <v-row align="start" justify="start">
    <v-col>
      <v-btn
        v-if="$route.path!=='/'
          && $route.path!=='/'+$i18n.locale&&name"
        class="float-left"
        nuxt
        :to="'/'"
        outlined
      >
        {{ name }}
      </v-btn>
      <div class="float-right" style="width:70px">
        <LangSwitch />
      </div>
      <div
        v-for="item in items"
        :key="item.sys.id"
        class="float-right mr-2"
      >
        <v-btn
          v-if="!$route.path.toLowerCase().endsWith('/'+item.fields.slug.toLowerCase())
            && !$route.path.toLowerCase().endsWith('/'+$i18n.locale+'/'+item.fields.slug.toLowerCase())"
          outlined
          color="white"
          :to="($i18n.defaultLocale!=$i18n.locale?'/'+$i18n.locale:'')+'/'+item.fields.slug"
        >
          {{ item.fields.name }}
        </v-btn>
      </div>
    </v-col>
  </v-row>
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
