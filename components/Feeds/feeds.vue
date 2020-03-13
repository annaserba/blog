<template>
  <div class="mt-5 mb-5">
    <v-skeleton-loader
      v-if="loading"
      class="mx-auto"
      max-width="300"
      min-width="300"
      type="card"
    />
    <div v-else-if="feeds.length">
      <ShortFeed
        v-for="(feed, index) in feeds"
        :key="feed.ID"
        :feed="feed"
        :index="index"
        :lang="lang"
      />
    </div>
    <v-row
      v-else-if="!loading"
      align="center">
      <v-col align="center">
        <h1
          class="display-2 primary--text"
        >
          No Feeds
        </h1>
      </v-col>
    </v-row>
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
      .get('Feeds?lang=' + this.lang, {
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
