<template>
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
</template>
<script>
import Page from '@/components/card'
import { createClient } from '~/plugins/contentful.js'

export default {
  components: {
    Page
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
          text: 'Page',
          disabled: true
        }
      ]
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