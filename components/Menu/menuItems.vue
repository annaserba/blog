<template>
  <v-row align="start" justify="start">
    <v-col cols="4">
      <v-btn
        v-if="this.$route.path!=='/'
          && this.$route.path!=='/'+$i18n.locale&&name"
        nuxt
        :to="'/'"
        outlined
      >
        {{ name }}
      </v-btn>
    </v-col>
    <v-col class="end" cols="8">
      <LangSwitch />
      <v-btn
        v-for="menuItem in menuItems"
        :key="menuItem.sys.id"
        class="float-right mr-2"
        outlined
        color="white"
        :to="menuItem.fields.slug || menuItem.fields.link.fields.name"
      >
        {{ menuItem.fields.name }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import LangSwitch from '@/components/Menu/langSwitch'
import { createClient } from '~/plugins/contentful.js'
const query = function (context, locale) {
  const client = createClient()
  client.getEntries({
    'sys.id': process.env.CTF_PERSON_ID,
    locale: context.$i18n.locales.filter(l => l.code === locale)[0].contentfulName
  })
    .then((person) => {
      context.name = person.items[0].fields.name
    })
    // eslint-disable-next-line handle-callback-err
    .catch((error) => {
      context.errored = true
    })
  client.getEntries({
    content_type: 'menu',
    order: '-fields.order',
    locale: context.$i18n.locales.filter(l => l.code === locale)[0].contentfulName
  })
    .then((entries) => {
      context.menuItems = entries.items.filter(menuItem => menuItem.fields.name)
    })
    // eslint-disable-next-line handle-callback-err
    .catch((error) => {
      context.errored = true
    })
}

export default {
  components: {
    LangSwitch
  },
  data () {
    return {
      menuItems: [],
      name: ''
    }
  },
  mounted () {
    query(this, this.$i18n.locale)
    this.$i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
      query(this, newLocale)
    }
  }
}
</script>
