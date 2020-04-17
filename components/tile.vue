<template>
  <v-card
    class="mx-auto mb-5 fill-height"
    width="100%"
    tile
    :loading="loading==true?'warning':false"
    nuxt
    :to="url"
  >
    <v-img
      v-if="image&&loading==false"
      class="white--text align-end"
      :src="image"
    />
    <v-card-title v-if="model.fields.title">
      {{ model.fields.title }}
    </v-card-title>
    <v-card-text
      v-if="model.fields.description"
      class="text--primary pb-0"
    >
      {{ model.fields.description }}
    </v-card-text>
    <v-chip-group
      v-if="model.fields.tags"
      class="pl-2 pr-2"
      column
      active-class="primary--text"
    >
      <v-chip
        v-for="tag in model.fields.tags"
        :key="tag"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
    <v-col v-if="model.fields.links" cols="12" class="pb-0">
      <PortfolioLinks :links="model.fields.links" />
    </v-col>
  </v-card>
</template>
<script>
import PortfolioLinks from '@/components/Portfolio/links'
import { createClient } from '~/plugins/contentful.js'
export default {
  components: {
    PortfolioLinks
  },
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    model: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      image: '',
      loading: true,
      show: false
    }
  },
  mounted () {
    const that = this
    if (this.model.fields.image) {
      const client = createClient()
      client.getAsset(this.model.fields.image.sys.id)
        .then((asset) => { this.image = asset.fields.file.url })
        .finally(() => (setTimeout(function () { that.loading = false }, 1000)))
    } else {
      this.loading = false
    }
  },
  methods: {
    formatDate (date) {
      if (!date) { return null }

      const [year, month, day] = date.split('T')[0].split('-')
      return `${month}/${day}/${year}`
    }
  }
}
</script>
