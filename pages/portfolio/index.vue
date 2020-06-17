<template>
  <div>
    <Menu :name="name" :items="items" :image="image" />
    <v-container
      align-start
      fill-height
    >
      <v-row>
        <v-col>
          <v-breadcrumbs :items="breadcrumbs" class="pl-1">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <Portfolio :lang="$i18n.locale" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu/menu'
import { createClient } from '~/plugins/contentful.js'
import Portfolio from '@/components/Portfolio/portfolio'
export default {
  components: {
    Menu,
    Portfolio
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
                text: 'Portfolio',
                disabled: false,
                to: '/portfolio'
              }
            ]
          }
        })
    })
  },
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: 'Portfolio'
    }
  }
}
</script>
