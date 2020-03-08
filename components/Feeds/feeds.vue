<template>
  <div class="mt-5 mb-5">
    <v-sheet
      v-if="loading"
      :color="`grey  lighten-5`"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        min-width="300"
        type="card"
      />
    </v-sheet>
    <div v-else-if="feeds.length">
      <ShortFeed
        v-for="(feed, index) in feeds"
        :key="feed.ID"
        :feed="feed"
        :index="index"
        :lang="lang"
      />
    </div>
    <div v-else>
      No feeds
    </div>
  </div>
</template>
<script>
import axios from '~/plugins/axios'
import ShortFeed from '@/components/Feeds/_shortFeed'
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
    axios
      .get('api/Feeds?lang=' + this.lang, {
      })
      .then((response) => {
        this.feeds = response.data
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>
