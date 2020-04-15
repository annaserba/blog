<template>
  <div class="mt-5 mb-5 pl-5 pr-5">
    <v-row
      align="center"
    >
      <v-skeleton-loader
        v-if="loading"
        class="mx-auto"
        max-width="300"
        min-width="300"
        type="card"
      />
      <v-col
        v-else-if="feeds.length"
        v-for="(feed, index) in feeds"
        :key="feed.fields.slug"
        :index="index"
        cols="12"
        md="3"
        sm="6"
      >
        <ShortFeed
          :model="feed"
          :lang="lang"
        />
      </v-col>
      <v-col v-else-if="!loading" align="center">
        <h1
          class="display-2 primary--text"
        >
          {{ $t('noFeed') }}
        </h1>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ShortFeed from '@/components/Feeds/_shortFeed'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  props: {
    lang: String
  },
  components: {
    ShortFeed
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  data () {
    return {
      feeds: [],
      loading: true,
      errored: false
    }
  },
  mounted () {
    client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    })
      .then((entries) => {
        this.feeds = entries.items
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>
