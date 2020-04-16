<template>
  <v-row>
    <v-col>
      <v-breadcrumbs :items="breadcrumbs" class="pl-1">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <Feeds :lang="$i18n.locale" />
    </v-col>
  </v-row>
</template>

<script>
import Feeds from '@/components/Feeds/feeds'
export default {
  layout: 'blog',
  components: {
    Feeds
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
