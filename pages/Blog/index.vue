<template>
  <div>
    <Menu />
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <Feeds :lang="$i18n.locale" :feeds="posts" />
  </div>
</template>

<script>
import Menu from '@/components/Menu/menu'
import Feeds from '@/components/Feeds/feeds'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  components: {
    Feeds,
    Menu
  },
  asyncData () {
    return client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then((entries) => {
      return {
        posts: entries.items
      }
    })
  },
  data: () => ({
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
  }),
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: 'Blog'
    }
  }
}
</script>
