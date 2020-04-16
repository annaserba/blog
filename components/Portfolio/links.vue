<template>
  <v-row>
    <v-col
      v-for="(portfolioLink, index) in portfolioLinks"
      :key="portfolioLink"
      :index="index"
      cols="12"
    >
      <v-btn outlined :href="portfolioLink.fields.link" target="_blank">
        {{ portfolioLink.fields.title }}
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
    'sys.id[in]': linksQuery
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
