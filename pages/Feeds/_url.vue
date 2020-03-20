<template>
  <div>
    <Menu />
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-container
      class="text-center"
      fill-height
      max-width="1000"
      min-width="1000"
    >
      <v-skeleton-loader
        v-if="loading"
        class="mx-auto"
        type="card"
        width="100%"
      />
      <Feed
        v-else-if="feed"
        :feed="feed"
      />
      <v-row
        v-else-if="!loading"
        align="center"
      >
        <v-col align="center">
          <h1
            class="display-2 primary--text"
          >
            No Feed
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Menu from '@/components/menu'
import axios from '~/plugins/axios'
import Feed from '@/components/Feeds/_feed'
export default {
  components: {
    Feed,
    Menu
  },
  data () {
    return {
      feed: null,
      url: this.$route.params.url,
      loading: true,
      errored: false,
      breadcrumbs: [
        {
          text: 'Profile',
          disabled: false,
          to: '/'
        },
        {
          text: 'Blog',
          disabled: false,
          href: '/Feeds'
        },
        {
          text: 'Feed',
          disabled: true
        }
      ]
    }
  },
  mounted () {
    axios
      .get('Feeds/' + this.url + '?lang=' + this.$i18n.locale, {
      })
      .then((response) => {
        this.feed = response.data
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>
