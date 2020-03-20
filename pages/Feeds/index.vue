<template>
  <div>
    <Menu />
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <Feeds :lang="$i18n.locale" />
  </div>
</template>
<script>
import Menu from '@/components/menu'
import Feeds from '@/components/Feeds/feeds'
export default {
  components: {
    Feeds,
    Menu
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
        to: '/Feeds'
      }
    ]
  })
}
</script>
