<template>
  <div>
    <Menu />
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
      <v-card
        v-else-if="feed"
        class="mx-auto mb-5 mt-5"
        width="80%"
      >
        <v-btn
          class="mt-5 mr-1"
          color="orange"
          outlined
          absolute
          right
          small
          :to="'/Feeds'"
        >
          Назад
        </v-btn>
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Feed
          :feed="feed"
        />
        <div
          v-if="feed.commentStatus"
          class="pl-4 pr-4 pb-5 pt-2"
          id="anycomment-app"
        />
        <script v-if="feed.commentStatus">
          AnyComment = window.AnyComment || []; AnyComment.Comments = [];
          AnyComment.Comments.push({
          "root": "anycomment-app",
          "app_id": 742,
          "track_get_params": true,
          "language": "ru"
          })
        </script>
        <script v-if="feed.commentStatus" type="text/javascript" async src="https://cdn.anycomment.io/assets/js/launcher.js" />
      </v-card>
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
