<template>
  <v-card flat :style="{'min-height':'100%'}">
    <Menu :name="name" :items="items" :image="image" />
    <v-container
      class="mt-14"
      align-start
      fill-height
      align-content-start
    >
      <v-row>
        <v-col cols="8">
          <v-breadcrumbs :items="breadcrumbs" class="pl-1">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col v-if="loading" cols="12">
          <v-skeleton-loader
            class="mx-auto"
            type="card"
            width="100%"
          />
        </v-col>
        <v-col v-else-if="model" cols="12">
          <Page
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
      </v-row>
    </v-container>
  </v-card>
</template>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8" />
<script>
import Menu from '@/components/Menu/menu'
import Page from '@/components/card'
import { createClient } from '~/plugins/contentful.js'

export default {
  components: {
    Menu,
    Page
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
                text: 'Page',
                disabled: true
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
      errored: false
    }
  },
  mounted () {
    const that = this
    const client = createClient()
    client.getEntries({
      content_type: 'page',
      'fields.slug': this.$route.params.url,
      locale: this.$i18n.locales.filter(l => l.code === this.$i18n.locale)[0].contentfulName
    })
      .then((entries) => {
        this.model = entries.items[0]
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        this.errored = true
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
