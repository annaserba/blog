<template>
  <v-row
    v-if="loading"
    align="start"
  >
    <v-col
      v-for="n in limit"
      :key="n"
      cols="12"
      sm="12"
      md="6"
      lg="6"
      xl="4"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      />
    </v-col>
  </v-row>
  <v-row v-else-if="portfolios.length">
    <v-col
      v-for="(portfolio, index) in portfolios"
      :key="portfolio.fields.slug"
      :index="index"
      cols="12"
      sm="12"
      md="6"
      lg="6"
      xl="4"
    >
      <Tile
        :model="portfolio"
        :lang="lang"
      />
    </v-col>
    <v-col cols="12">
      <v-pagination
        v-if="pageCount>1"
        v-model="page"
        :length="pageCount"
        :total-visible="5"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @input="next"
      />
    </v-col>
  </v-row>
</template>
<script>
import Tile from '@/components/tile'
import { createClient } from '~/plugins/contentful.js'
const query = function (context) {
  const client = createClient()
  client.getEntries({
    content_type: 'portfolio',
    order: '-sys.updatedAt',
    limit: context.limit,
    skip: (context.page - 1) * 1,
    locale: context.$i18n.locales.filter(l => l.code === context.$i18n.locale)[0].contentfulName
  })
    .then((entries) => {
      context.portfolios = entries.items
      context.pageCount = Math.ceil(entries.total / entries.limit)
    })
    // eslint-disable-next-line handle-callback-err
    .catch((error) => {
      context.errored = true
    })
    .finally(() => (context.loading = false))
}
export default {
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  components: {
    Tile
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    lang: String
  },
  data () {
    return {
      page: this.$route.params.page ?? 1,
      pageCount: 1,
      limit: 4,
      portfolios: [],
      loading: true,
      errored: false
    }
  },
  mounted () {
    query(this)
  },
  methods: {
    next () {
      this.$router.push({ query: { page: this.page } })
      query(this)
    }
  }
}
</script>
