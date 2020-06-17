<template>
  <div>
    <Menu :name="name" :items="items" :image="image" />
    <v-container
      align-start
      fill-height
    >
      <v-breadcrumbs :items="breadcrumbs" class="pl-1">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <Feeds :lang="$i18n.locale" />
    </v-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu/menu'
import { createClient } from '~/plugins/contentful.js'
import Feeds from '@/components/Feeds/feeds'
export default {
  components: {
    Menu,
    Feeds
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
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: 'Blog'
    }
  }
}
</script>
