<template>
  <v-row>
    <v-col
      v-for="(portfolioLink, index) in portfolioLinks"
      :key="portfolioLink.sys.id"
      :index="index"
      cols="12"
      class="pt-0"
    >
      <span>
        {{ portfolioLink.fields.title }}
      </span>
      <span>
        {{ portfolioLink.fields.description }}
      </span>
      <v-btn
        v-if="portfolioLink.fields.link"
        color="orange"
        class="float-right"
        outlined
        tile
        :href="portfolioLink.fields.link"
        target="_blank"
      >
        WebSite  <fa class="ml-1" :icon="['fas', 'faExpandAlt']" />
      </v-btn>
      <v-btn
        v-if="portfolioLink.fields.github"
        color="#24292e"
        dark
        depressed
        tile
        class="float-right mr-3"
        :href="portfolioLink.fields.github"
        target="_blank"
      >
        Github  <fa class="ml-1" :icon="['fab', 'github']" />
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
const query = function (context) {
  const linksQuery = (context.links ? context.links.map(l => l.sys.id) : []).join()
  const client = createClient()
  client.getEntries({
    content_type: 'portfolioLinks',
    order: '-sys.createdAt',
    'sys.id[in]': linksQuery,
    locale: context.$i18n.locales.filter(l => l.code === context.$i18n.locale)[0].contentfulName
  })
    .then((entries) => {
      context.portfolioLinks = entries.items
    })
    // eslint-disable-next-line handle-callback-err
    .catch((error) => {
      context.errored = true
    })
    .finally(() => (context.loading = false))
}
export default {
  props: {
    lang: {
      type: String,
      required: false,
      default: ''
    },
    links: {
      type: Array,
      required: false,
      default: null
    }
  },
  data () {
    return {
      portfolioLinks: [],
      loading: true,
      errored: false
    }
  },
  mounted () {
    query(this)
  },
  methods: {
  }
}
</script>
