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
        v-else-if="model"
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
          :to="'/blog'"
        >
          {{ $t('back') }}
        </v-btn>
        <v-breadcrumbs :items="breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Feed
          :model="model"
        />
        <div
          v-if="model.fields.commentStatus"
          id="anycomment-app"
          class="pl-4 pr-4 pb-5 pt-2"
        />
        <script v-if="model.fields.commentStatus">
          AnyComment = window.AnyComment || []; AnyComment.Comments = [];
          AnyComment.Comments.push({
          "root": "anycomment-app",
          "app_id": 742,
          "track_get_params": true,
          "language": "ru"
          })
        </script>
        <script v-if="model.fields.commentStatus" type="text/javascript" async src="https://cdn.anycomment.io/assets/js/launcher.js" />
      </v-card>
      <v-row
        v-else-if="!loading"
        align="center"
      >
        <v-col align="center">
          <h1
            class="display-2 primary--text"
          >
            {{ $t('noFeed') }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Menu from '@/components/Menu/menu'
import Feed from '@/components/Feeds/_feed'
import { createClient } from '~/plugins/contentful.js'

export default {
  components: {
    Feed,
    Menu
  },
  data () {
    return {
      model: null,
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
          href: '/blog'
        },
        {
          text: 'Feed',
          disabled: true
        }
      ]
    }
  },
  mounted () {
    const client = createClient()
    client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': this.$route.params.url
    })
      .then((entries) => {
        this.model = entries.items[0]
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        this.errored = true
      })
      .finally(() => (this.loading = false))
  },
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: this.$route.params.url
    }
  }
}
</script>
