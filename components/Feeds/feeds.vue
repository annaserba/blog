<template>
  <v-row
    v-if="loading"
    align="start"
  >
    <v-col
      v-for="n in limit"
      :key="n"
      cols="12"
      sm="6"
      md="6"
      lg="4"
      xl="3"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      />
    </v-col>
  </v-row>
  <v-row v-else-if="feeds.length">
    <v-col
      v-for="(feed, index) in feeds"
      :key="feed.fields.slug"
      :index="index"
      cols="12"
      sm="6"
      md="6"
      lg="4"
      xl="3"
    >
      <Tile
        :model="feed"
        :lang="lang"
        :url="'feed'"
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
  <v-row
    v-else-if="!loading"
  >
    <v-col align="center">
      <h1
        class="display-2 primary--text"
      >
        {{ $t('noFeed') }}
      </h1>
    </v-col>
  </v-row>
</template>
<script>
import Tile from '@/components/tile'
import { createClient } from '~/plugins/contentful.js'
const query = function (context) {
  const client = createClient()
  client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
    select: 'sys.id,fields.slug,fields.title,fields.description,fields.tags,fields.image',
    limit: context.limit,
    skip: (context.page - 1) * 1
  })
    .then((entries) => {
      context.feeds = entries.items
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
      limit: 10,
      feeds: [],
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
