<template>
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
</template>

<script>
import Portfolio from '@/components/Portfolio/portfolio'
export default {
  components: {
    Portfolio
  },
  data: () => ({
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
  }),
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: 'Portfolio'
    }
  }
}
</script>
