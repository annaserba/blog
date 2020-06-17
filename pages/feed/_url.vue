<template>
  <div>
    <Menu :name="name" :items="items" :image="image" />
    <v-container
      align-start
      fill-height
    >
      <v-row>
        <v-col cols="8">
          <v-breadcrumbs :items="breadcrumbs" class="pl-1">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="mt-3 mr-1 float-right"
            color="orange"
            outlined
            small
            :to="'/blog'"
          >
            {{ $t('back') }}
          </v-btn>
        </v-col>
        <v-col v-if="loading" cols="12">
          <v-skeleton-loader
            class="mx-auto"
            type="card"
            width="100%"
          />
        </v-col>
        <v-col v-else-if="model" cols="12">
          <Feed
            :model="model"
          />
        </v-col>
        <v-col
          v-else-if="!loading"
          cols="12"
          align="center"
        >
          <h1
            class="display-2 primary--text"
          >
            {{ $t('noFeed') }}
          </h1>
        </v-col>
        <v-col v-if="model&&model.fields.commentStatus" cols="12">
          <v-card
            :loading="loading==true?'warning':false"
            tile
            class="mx-auto mb-5"
          >
            <div
              id="anycomment-app"
              class="pl-4 pr-4 pb-5 pt-2"
            />
            <script v-if="model&&model.fields.commentStatus">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8" />
<script>
import Menu from '@/components/Menu/menu'
import Feed from '@/components/card'
import { createClient } from '~/plugins/contentful.js'

export default {
  components: {
    Menu,
    Feed
  },
  asyncData ({ env, app }) {
    const client = createClient()
    return Promise.all([client.getEntries({
      'sys.id': env.CTF_PERSON_ID,
      locale: app.i18n.locales.filter(l => l.code === app.i18n.locale)[0].contentfulName
    }), client.getEntries({
      content_type: 'menu',
      order: '-fields.order',
      locale: app.i18n.locales.filter(l => l.code === app.i18n.locale)[0].contentfulName
    })
    ]).then(([person, menuItems]) => {
      return client.getAsset(person.items[0].fields.image.sys.id)
        .then((asset) => {
          return {
            name: person.items[0].fields.name,
            image: asset.fields.file.url,
            items: menuItems.items,
            breadcrumbs: [
              {
                text: 'Profile',
                disabled: false,
                to: '/'
              },
              {
                text: 'Blog',
                disabled: false,
                to: '/blog'
              }
            ]
          }
        })
    })
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
    const that = this
    const client = createClient()
    client.getEntries({
      content_type: 'blogPost',
      'fields.slug': this.$route.params.url,
      locale: this.$i18n.locales.filter(l => l.code === this.$i18n.locale)[0].contentfulName
    })
      .then((entries) => {
        this.model = entries.items[0]
      })
      .finally(() => (setTimeout(function () { that.loading = false }, 2000)))
  },
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: this.$route.params.url
    }
  }
}
</script>
